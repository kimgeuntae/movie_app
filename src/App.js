import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    reting: 4.9
  },
  {
    id: 3,
    name: "Bibimbab",
    image:
      "http://food.chosun.com/site/data/img_dir/2012/05/24/2012052401688_0.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg",
    rating: 4.7
  },
  {
    id: 5,
    name: "kimbap",
    image:
      "https://craftlog.com/m/i/5934748=s1280=h960",
    rating: 4.6
  }
];

function Food({ name, picture, rating }) {
  return <div>
            <h2>{name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture}></img>
        </div>
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
