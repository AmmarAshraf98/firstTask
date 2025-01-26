import React from "react";
import { MainHeader } from "../MainHeader/MainHeader";

export default function About() {
  return (
    <div>
      <MainHeader>about component</MainHeader>
      <div className='flex flex-wrap text-white'>
        <p className='p-1 w-full sm:w-1/2'>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className='p-1 w-full sm:w-1/2'>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
