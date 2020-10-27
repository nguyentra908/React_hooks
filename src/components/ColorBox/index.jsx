import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor() {
    const COLOR_LIST=['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomItem=Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomItem];

}

function ColorBox() {
    const [color, setcolor]=useState(()=>{
        const initColor=localStorage.getItem('box-color')||'deeppink';
        return initColor;
    });
   

    function handleBoxClick() {
        const newColor=getRandomColor();
        setcolor(newColor);
        localStorage.setItem('box-color',newColor);
    }
    return (
        <div
          className='color-box'
          style={{backgroundColor:color}}
          onClick={handleBoxClick}
        >
       
        </div>
    );
}

export default ColorBox;