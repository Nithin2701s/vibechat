import { useState } from "react";
import { userAuthStore } from "../store/useAuthStore";
import { MessageSquare, User } from "lucide-react";
const SignUpPage = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSigningUp } = userAuthStore;

  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <MessageSquare className='size-6 text-primary' />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className='text-base-content/60'>
                Get started with your free account{" "}
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='form-control'>
              <label htmlFor='fullname' className='label'>
                <span className='label-text font-medium'>Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-base-content/40' />
                </div>
                <input
                  type='text'
                  name='fullname'
                  id='fullname'
                  className='input input-bordered w-[75%] pl-5'
                  value={userData.fullname}
                  onChange={(e) => {
                    setUserData((prev) => ({
                      ...prev,
                      fullname: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
