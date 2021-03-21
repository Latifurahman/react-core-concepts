import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = ['Razzak', 'Alamgir', 'Shuvo'];

  const friends = [
    {name: 'Imran', girlFriend: 'Tamanna'},
    {name: 'Rocky', girlFriend: 'Tanshu'},
    {name: 'Abir', girlFriend: 'Rubaiya'}
  ];

  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier EL', price: '$249.99'}


]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Posts></Posts>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
            
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }
        
   
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
      
        
      </header>
    </div>
  );
}



function Friend(props){
  const friendStyle ={
    border: '1px solid red',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'gray',
    color: 'gold',
    borderRadius: '5px'
  }
  return (
    <div style={friendStyle}>
      <h1>Name: {props.friend.name} </h1>
      <h3>GfName: {props.friend.girlFriend} </h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(15);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Posts(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h3>Dynamic posts: {posts.length} </h3>
      <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
      
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    backgroundColor: '#ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    float: 'left',
    height: '200px',
    width: '200px'
  }

  const {name, price} = props.product;
  

 return (
 <div style={productStyle}>
 <h3>{name}</h3>
  <h2>{price}</h2>
  <button>Buy Now</button>
  </div>
 )
}

// function Person(props){
//   const personStyle = {
//     color: 'white',
//     padding: '20px'
//   }
//   return (
//     <div style={personStyle}>
//   <h2> {props.name}</h2>
//   <h3>Profession: {props.profession}</h3>
//   </div>
//   )
// }

export default App;
