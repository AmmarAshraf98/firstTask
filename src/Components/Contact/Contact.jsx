import { useState } from "react";
import { MainHeader } from "../MainHeader/MainHeader";

export default function Contact() {
  const [isChange, setisChange] = useState({
    name: false,
    email: false,
    age: false,
    password: false,
  });

  // state => input
  // modify our state

  // const obj = {
  //   name: "ammar",
  //   age: 30,
  // };

  // console.log({ ...obj, name: "ali" });

  // deepcopy => spread operator => {...obj,age:20}
  function handleChange(e) {
    // // setisChange(true);
    // console.log(e.target.id);

    setisChange((prev) => ({
      ...prev,
      [e.target.id]: true,
    }));
  }

  return (
    <div className=''>
      <MainHeader>contact section</MainHeader>
      <div className='mx-auto w-full sm:w-11/12 md:10/12'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='relative mb-6 py-2'>
            <input
              type='text'
              id='name'
              placeholder='enter name'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
            />
            <label
              htmlFor='name'
              className={`absolute left-0  text-black ${
                isChange.name
                  ? "opacity-100 top-[-30px]"
                  : "opacity-0 top-[20px]"
              } transition-[opacity,top] duration-300`}
            >
              enter name
            </label>
          </div>

          <div className='relative mb-6 py-2'>
            <input
              name='firstName'
              type='text'
              id='email'
              placeholder='enter name'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
            />
            <label
              htmlFor='email'
              className={`absolute left-0  text-black ${
                isChange.email
                  ? "opacity-100 top-[-30px]"
                  : "opacity-0 top-[20px]"
              } transition-[opacity,top] duration-300`}
            >
              enter email
            </label>
          </div>

          <div className='relative mb-6 py-2'>
            <input
              type='text'
              id='age'
              placeholder='enter name'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
            />
            <label
              htmlFor='age'
              className={`absolute left-0  text-black ${
                isChange.age
                  ? "opacity-100 top-[-30px]"
                  : "opacity-0 top-[20px]"
              } transition-[opacity,top] duration-300`}
            >
              enter age
            </label>
          </div>

          <div className='relative mb-6 py-2'>
            <input
              type='text'
              id='password'
              placeholder='enter name'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
            />
            <label
              htmlFor='password'
              className={`absolute left-0  text-black ${
                isChange.password
                  ? "opacity-100 top-[-30px]"
                  : "opacity-0 top-[20px]"
              } transition-[opacity,top] duration-300`}
            >
              enter password
            </label>
          </div>

          <button className='py-2 px-4 bg-green-900 rounded-md transition-all duration-200 hover:bg-green-600 hover:text-white'>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
