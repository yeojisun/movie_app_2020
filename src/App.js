import React from 'react';
import PropTypes from "prop-types";
import logo from './logo.svg';
import './App.css';

function Food({name, picture, rating}){
return <div>
  <h1>i love {name}</h1>
<h4>rating : {rating}/5.0</h4>
  <img src={picture} alt={name}></img>
</div>;
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired

};

const foodLike = [
{
  // 모든 react의 element들은 유일해야하므로 유일키값을 가지고 있어야 한다.
  id: 0, 
  name:"kimchi",
  image:"https://cdn.crowdpic.net/detail-thumb/thumb_d_AAA4C5E8C1E29791413BFBFF5419BA73.jpg",
  rating: 5.0
},
{
  id: 1,
  name:"samgyeopsal",
  image:"http://cdn.kormedi.com/wp-content/uploads/2020/03/gettyimages-a11229272-580x387.jpg",
  rating: 4.4
},
{
  id: 2,
  name:"bibimbap",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
  rating: 2.0
}
];
function renderFood(dish){
  // console.log(dish);
  // 아래의 key 값은 내부에서 사용하기 위해 존재하는 prop이다.
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      {/* {foodLike.map(dish=><Food name={dish.name} picture={dish.image}/>)} */}
      {console.log(foodLike.map(renderFood))}
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
