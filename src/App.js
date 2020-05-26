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

function renderFood(dish){
  // console.log(dish);
  // 아래의 key 값은 내부에서 사용하기 위해 존재하는 prop이다.
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

class App extends React.Component{
  state = {
    count :0
  };

  add = () =>{
    this.setState(current => ({count:current.count+1}));
  };
  minus = () =>{
    this.setState(current => ({count:current.count-1}));
  };
  render(){
  return <div>
    <h1>the number is: {this.state.count}</h1>
    <button onClick={this.add}>add</button>
    <button onClick={this.minus}>minus</button>
  </div>
  }
}


export default App;
