import React, { useState } from 'react'

export default function EventEdu() {


    // onclick : 요소를 클릭했을때
    // onchange : input요소에 변화가 생겼을때
    // onsubmit : from이 제출될 떄
    // onmouseenter : 마우스 올렸을때
    // onmouseleave : 마우스 나갔을때
    // onkeydown : 키 누를때
    // onkeyup : 키 떌때
    // onfocus : 요소가 포커스 되었을떄
    // onblur : 요소가 포커스를 잃었을때
    // onload : 이미지등이 리소스를 로드 했을떄
    // onerror : 이미징등이 리소르를 로드 했을때
    // oncontextmenu : 요소에 마우스 오른쪽 클릭 했을때
    // onscroll : 요소가 스크롤 될 때
    // 사용자 정의 이벤트 : 아래 형태를 이용해 새로운 이벤트 객체 생성 가능.. 한데 우리가 쓸일이 언지 있을지?
    // const myEvent = new Event(`custom`);


const [isEnter,setISEnter] = useState(false);


function handleEnterMouse (){
    setISEnter(true);  
}

function handleLeaveMouse (){
    setISEnter(false);  
}



  return (
    <div>

    {/* {마우스를 올리면 "지금 내 위에 마우스가 있어요"} */}
    {/* {마우스가 밖으로 나가면 "내 위에는 마우스가 없어요"라고 하단 p태그에 출력되도록 만들어봅시다!} */}
  
    <p onMouseEnter={handleEnterMouse} onMouseLeave={handleLeaveMouse}>
        {isEnter ? "지금 내위에 마우스가 있어요" : "지금 내위에 마우스가 없어요"}
    </p>
   
   {/*  */}

    </div>
  )
}
