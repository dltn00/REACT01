import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className='product'>
        {/* <img src="" alt=""/> */}
        <div className='temp-img'></div>
        <p>상품명</p>
        <div>
            <p>할인율</p>
            <p>원가</p>
        </div>
        <p className='price'>실제가격</p>
        <p>도착예정일</p>
        <div>최대 얼마 적립</div>
    </div>
  )
}