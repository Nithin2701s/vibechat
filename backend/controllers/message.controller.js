import User from "../models/user.model.js"
import Message from "../models/message.model.js"
import cloudinary from "../lib/cloudinary.js";
export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const users = await User.find({ _id: { $ne: loggedInUserId } });
        res.status(200).json({ users })
    }
    catch (err) {
        console.log("Error in getUser controller " + err.message);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        const messages = Message.find({
            $or: [{
                senderId: senderId,
                receiverId: receiverId
            },
            {
                senderId: receiverId,
                receiverId: senderId
            }
            ]
        })
        res.status(200).json({ messages });
    } catch (error) {
        console.log("Error in getMessages controller " + error.message)
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url;
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })
        await newMessage.save();

        return res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller " + error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}