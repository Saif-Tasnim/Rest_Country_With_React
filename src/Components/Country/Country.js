import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Name : {props.name} </h2>
            <img src = {props.img} alt="" />
            <h3>Capital : {props.city} </h3>
            <h3>Continents : {props.continent}</h3>
            <h3>Population : {props.populations}</h3>
        </div>
    );
};

export default Country;