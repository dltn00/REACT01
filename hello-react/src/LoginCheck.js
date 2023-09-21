import React from 'react'

export default function LoginCheck(props) {

    if(props.로그인여부) {
        return (
            <p>안녕하세요 회원님</p>
        )
    }else{
        return (
            <p>로그인 해주세요.</p>
     )
    }




    
}
