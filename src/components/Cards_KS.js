import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards_KS() {
  return (
    <div className='cards'>
      <h1>Những khách sạn nổi tiếng ở Đà Nẵng</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/muong-thanh.jpg'
              text='Khách sạn Mường Thanh'
            />
            <CardItem
              src='images/sun-peninsula.jpg'
              text='Khách sạn InterContinental Danang Sun Peninsula'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tms-hotel.jpg'
              text='Khách sạn TMS'
            />
            <CardItem
              src='images/pullman-resort.jpg'
              text='Resort Pullman'
            />
            <CardItem
              src='images/golden-bay.jpg'
              text='Khách sạn Golden Bay'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_KS;
