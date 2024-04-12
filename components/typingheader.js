import React from 'react'

function Typingheader() {
    const texts = ["Hello, Tailwind CSS!", "This is a typing effect.", "Enjoy the animation!"];
    const typingContainer = document.getElementById("typing-container");
    let currentTextIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 100; 
    function type() {
        const text = texts[currentTextIndex];
        if (isDeleting) {
          currentText = text.substring(0, currentText.length - 1);
        } else {
          currentText = text.substring(0, currentText.length + 1);
        }
    
        typingContainer.innerHTML = currentText;
    
        let typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed;
    
        if (!isDeleting && currentText === text) {
          typingDelay = 1500; // Pause after typing
          isDeleting = true;
        } else if (isDeleting && currentText === "") {
          isDeleting = false;
          currentTextIndex++;
          if (currentTextIndex === texts.length) {
            currentTextIndex = 0;
          }
        }
    
        setTimeout(type, typingDelay);
      }
    
      document.addEventListener("DOMContentLoaded", function () {
        type();
      });
  return (
   
    <></>

  
  )
}

export default Typingheader;