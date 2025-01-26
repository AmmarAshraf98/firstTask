import React, { useState } from "react";
// import img
// style
//create modal => state

import img1 from "../../assets/images/port1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
// import img4 from "https://routeegy.github.io/startFramework/assets/images/poert1.png";
const imagList = [img1, img2, img3, img1, img2, img3];

// use state > render

// state ===> render code =update
export default function Portfolio() {
  // undefined,null ,0,'' ,false
  const [currenImg, setCurrentImg] = useState(null); //1 //0  ==> arr[index]
  // const [currentImg, setcurrentImg] = useState(null);

  function handleClick(number) {
    setCurrentImg(number);
  }

  return (
    <>
      <div className='flex flex-wrap mt-24'>
        {imagList.map((ele, index) => (
          <Card
            key={index}
            number={index}
            image={ele}
            onHandleModal={handleClick}
          />
        ))}
      </div>

      {/* // isOpen > modal : null */}
      {/* {isOPen && <Modal />} */}
      {currenImg !== null ? (
        <Modal
          onHandleModal={setCurrentImg}
          image={imagList[currenImg]}
          number={currenImg}
        />
      ) : null}
    </>
  );
}

// Card image
function Card({ image, onHandleModal, number }) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 p-2 cursor-pointer'>
      <img
        src={image}
        alt='sadsads'
        className='w-full rounded-md'
        onClick={() => onHandleModal(number)}
      />
    </div>
  );
}

// Modal component
function Modal({ image, onHandleModal, number }) {
  return (
    <div
      className='absolute inset-0 bg-slate-300 center layout'
      onClick={(e) => {
        if (e.target.classList.contains("layout")) {
          onHandleModal(null);
        }

        // handle click on img
        e.stopPropagation();
      }}
    >
      <div className='w-1/4 mx-auto'>
        <i
          className='fa-solid fa-left-long p-3 bg-slate-600'
          onClick={(e) => {
            e.stopPropagation();
            onHandleModal(number >= imagList.length - 1 ? 0 : number + 1);
          }}
        ></i>
        <img src={image} alt='' />
        <i
          className='fa-solid fa-arrow-right p-3 bg-slate-600'
          onClick={(e) => {
            e.stopPropagation();
            onHandleModal(number == 0 ? imagList.length - 1 : number - 1);
          }}
        ></i>
      </div>
    </div>
  );
}
