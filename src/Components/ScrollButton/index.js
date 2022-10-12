import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50){
      setVisible(true)
    } 
    else if (scrolled <= 50){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className={`btn ${visible ? 'showbtn': 'closebtn'}`} onClick={scrollToTop}>
     <IoIosArrowUp size={25} color="#fff" />
    </button>
  );
}

export default ScrollButton