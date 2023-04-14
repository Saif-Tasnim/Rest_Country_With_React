import './App.css';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
        <Countries></Countries>
    </div>
  );
}


/* 

<RestCountry></RestCountry>

function RestCountry() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Visiting Country Through API </h1>
      <h3>Total Country : {countries.length}</h3>

      {
        countries.map(country => <ShowCountry name={country.name.common} capital = {country.capital}></ShowCountry>)
      }

    </div>
  );
}

function ShowCountry(props){
return (
  <div>
    <h1>Name : {props.name}</h1>
    <h3>Capital : {props.capital}</h3>
  </div>
);
} 


*/
export default App;
