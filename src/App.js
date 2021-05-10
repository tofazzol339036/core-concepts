import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  const persons = [
    {name:'Rubel', nayika:'Poly'},
    {name:'Jashim', nayika:'Shabana'},
    {name:'Bapparaz', nayika:'Cheka'},
    {name:'Manna', nayika:'Purnima'}
  ]
      return (
        <div className="App">
        <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Users></Users>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person person={persons[0]}></Person>
        <Person person={persons[1]}></Person>
        <Person person={persons[2]}></Person>
        <Person person={persons[3]}></Person>
        </header>
    </div>
  );
}
function Counter(){
  const [count , setCount] = useState(0);
  const buttonDecrease = () => {
    if(count > 0){
      setCount(count-1);
    }else{
      setCount(0)
    }
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={buttonDecrease}>Decrease</button>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1ps solid gray',
    borderRadius: '15px',
    backgroundColor: 'lightgray',
    color: 'green',
    height: '250px',
    width: '400px',
    margin: '20px',
    padding: '10px 0'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    width: '350px',
    border:'5px solid green',
    margin:'20px',
    padding:'10px',
    borderRadius:'10px'
  }
  const {name, nayika} = props.person;
  return (
    <div style={personStyle}>
      <h2>Name: {name}</h2>
      <h3>Hero of {nayika}</h3>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

export default App;


