import "./mainheader.css";
export function MainHeader({ children }) {
  return (
    <h1 className='mainheader pb-5 mb-5 relative mx-auto text-center uppercase text-3xl  w-fit text-white font-bold'>
      {children}
    </h1>
  );
}
