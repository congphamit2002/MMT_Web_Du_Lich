import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards_DL() {
  return (
    <div className='cards'>
      <h1>Những địa điểm du lịch ở Đà Nẵng</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/asia_park.jpg'
              text='Công viên Asia-Park'
            />
            <CardItem
              src='images/ngu-hanh-son.jpg'
              text='Ngũ Hành Sơn'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bai-bien-my-khe.jpg'
              text='Bãi Biển Mỹ Khê'
            />
            <CardItem
              src='images/pho-co-hoi-an.jpg'
              text='Phố cổ Hội An'
            />
            <CardItem
              src='images/cau-vang.jpg'
              text='Cầu vàng'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_DL;
