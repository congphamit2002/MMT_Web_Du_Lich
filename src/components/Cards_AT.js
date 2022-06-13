import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards_AT() {
  return (
    <div className='cards'>
      <h1>Những món ăn nhất định phải trải nghiệm khi đến Đà Nẵng</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/banh-xeo.jpg'
              text='Bánh Xèo'
            />
            <CardItem
              src='images/goi-ca-nam-o.jpg'
              text='Gỏi cá Nam Ô'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cao-lau.jpg'
              text='Cao Lầu'
            />
            <CardItem
              src='images/banh-trang-thit-heo.jpg'
              text='Thịt heo cuốn bánh tráng'
            />
            <CardItem
              src='images/my-quang.jpg'
              text='Mì Quảng'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_AT;
