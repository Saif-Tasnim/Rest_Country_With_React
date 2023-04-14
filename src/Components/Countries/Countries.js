import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Hello From Countries</h1>
            <h3> Total Country : {countries.length} </h3>
            {
                console.log(countries[0])
            }

            <div className='countries'>
                {
                    countries.map(country => <Country
                        name={country.name.common}
                        city={country.capital}
                        continent={country.continents[0]}
                        populations={country.population}
                        img = {country.flags.png}
                        key={country.cca3}
                    ></Country>

                    )
                }

            </div>
        </div>
    );
};

export default Countries;