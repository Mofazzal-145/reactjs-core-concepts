import logo from './logo.svg';
import './App.css';


// new one
const number = 173;
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Female Singer'},
  {name: 'james', job: 'kobita'},
  {name: 'Anupam Roy', job: 'milon '}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  borderRadius: '10px'
}

function App() {
  const nayoks = ['Rubel','Shakib khan','Salman Sha','Razzak', 'Manna','Dipjol'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name:{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person> )
      } */}

        {
          singers.map(singer => <Person name={singer.name} Job={singer.job}></Person>)
        }
        
    {/* <Person name = {nayoks[0]} secondPerson = "Opu"></Person>
    <Person name = {nayoks[1]} secondPerson = "mowsumi" ></Person>
    <Person name = {nayoks[2]} secondPerson = "Sabana"></Person> */}
  
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
