import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { logRoles } from '@testing-library/react';
import { useLayoutEffect } from 'react';
  
function App() {
const friedsList=['abadul islam','munnaf ali','ajay kumar','sadikul sardar']
const ProductName=['alu','potol','payas']

const [myCount, setCount]=useState(5);
const countClicker=()=>setCount(myCount+1);
const decriseData=()=>setCount(myCount-1);



  return (
    <div className="App">
      <h1>count is: {myCount}</h1>
      <button onClick={countClicker}>click me</button>
      <button onMouseOver={decriseData}>decrise count</button>


<Users></Users>

<ul>
{
   friedsList.map(friend=><li>{friend}</li>)
}
</ul>
{
  ProductName.map(product=><Product name={product}></Product>)
}
<Product name={ProductName[0]}></Product>










    </div>
  );
}

function Users(){
const [getUsers,setUsers]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data));
},[])
 
  return(
    <div>
 
      <ul>
{
    getUsers.map(user=><li>{user.website}</li>)
}
 



      </ul>
    </div>
  )
}

function Product(props){
console.log(props)
return(
  <div>
    <ul>
      <li>{props.name}</li>
    </ul>
  </div>
)

}
 
export default App;
