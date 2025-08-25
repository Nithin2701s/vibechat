export const errorStyle = {
    style: {
        border: "1px solid #ff0000",
        padding: "6px",
        color: "#fff",
        opacity: 0.5,
        backgroundColor: "rgba(39,22,22,0.7)",
        boxShadow: "5px 0px 1px 0px rgb(255,22,0)",
    },
    iconTheme: {
        primary: "#ff0000",
        secondary: "#FFFAEE",
    },
};
export const successStyle = {
    style: {
        border: "1px solid #5754E8",
        padding: "6px",
        color: "#fff",
        backgroundColor: "rgba(39,22,22,0.7)",
        boxShadow: "5px 0px 1px 0px #5754E8",
    },
    iconTheme: {
        primary: "#5754E8",
        secondary: "#FFFAEE",
    },
};

export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
}