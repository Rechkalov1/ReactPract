import PropTypes from   'prop-types';
 import imgDefault from '../no-img.png';

 export default function Painting ({
    imageUrl = imgDefault
    ,title,
    price
    ,authorName='Не известно'}) {
 
    return (
    <div>
      <img src={imageUrl} alt={title} width='480' />
      <h2>{title}</h2>
      <p>
        Год:<a href={imageUrl}> {authorName}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность :заканчивается или есть в наличии</p>
   <button type="button">Добавить в корзину</button>
    </div>
  );
  }

Painting.propTypes = {
imageUrl:PropTypes.string,
title:PropTypes.string,
price:PropTypes.number,
authorName:PropTypes.string,
}