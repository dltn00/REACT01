import React, { useState } from 'react'

export default function State() {
    // 기존 자바스크립트의 처리방식.
    // let count = 0 ;
    
    // const upButton = document.querySelector('up-button');
    // const countPlace = document.querySelector('count-place');

    // function countIncress(){
    //     count++;
    //     console.log(count);
    //     countPlace.innerText = count;
    // }

    const [카운트, 카운트수정해주는함수] = useState(0);
    const [isOn, setInOn] = useState(false);

    function changeToggle(){
        setInOn(!isOn);
        console.log(`isOn : ${isOn}`)
    }


  return (
    <div>
        {/* <p className='count-place'>0</p>
        
        <button className='up-button' onClick=Z{countIncress}>올려</button> */}
        asdasd수정수정
        {카운트}
        <button onClick={ () => { 카운트수정해주는함수(카운트 + 10) }}>올려</button>

        <p>현재 온오프 상태 : { isOn ? 'ON' : 'OFF' }</p>
        <button onClick={changeToggle}>토글버튼</button>


        {/* 숙제 */}
        {/* 인풋에 글씨를 입력하면 */}
       <input type="text" />
       {/* p태그 안에 입력한 텍스트가 그대로 출력되게 만들어주세요*/}
        <p className="your-input">
            당신의 입력 : {}
        </p>       
    </div>
  )
}