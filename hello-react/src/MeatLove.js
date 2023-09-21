import React from 'react'

export default function MeatLove(props) {
    const style = {
        color : 'rgb(255 95 0)',
        fontSize : '20px',
        fontWeight : 'bold'
    }
  return (
    <div style={style}>{props.고기종류}고기는 {props.순서}번째로 너무 맛있어</div>
  )
}
