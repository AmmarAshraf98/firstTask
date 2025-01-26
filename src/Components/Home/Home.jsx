import React from "react";
import img from "../../assets/avatar.svg";
import { MainHeader } from "../MainHeader/MainHeader";

export default function Home() {
  return (
    <div>
      <img src={img} className='w-1/4 lg:w-1/3 mx-auto' alt='asdsad' />
      <MainHeader>start framework</MainHeader>
      <p className='text-white text-center my-3'>
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
