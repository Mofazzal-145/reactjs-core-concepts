import logo from './logo.svg';
import './App.css';

const number = 173;
const singer = {name: 'Dr. Mahfuz', job: 'Singer'};
const femaleSinger = {name: 'Eva Rahman', job: 'Female Singer'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
    <Person name = "Shakib" secondPerson = "Opu"></Person>
    <Person name = "Omar" secondPerson = "mowsumi" ></Person>
    <Person name = "Razzak" secondPerson = "Sabana"></Person>
  
    <h4>New Components: </h4>
    <Friend name = "kabila" phone = "0124564"></Friend>
    <Friend name = "sabila" phone = "541331"></Friend>
    <Friend name = "mabila" phone = "0001122"></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props)
  return (
    <div className='person'>
    <h1>Name:{props.name}</h1>
    <p>{props.secondPerson}</p>
    </div>
  )
}

function Friend (props) {
  return (
    <div className="friend">
      <h2>Name:{props.name}</h2>
      <p>Phone No: {props.phone}</p>
    </div>
  )
}

export default App;
