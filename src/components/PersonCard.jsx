import React from 'react'

const PersonCard = (props) => { //props se pasa como input de la funcion flecha que define el componente funcional

    const {firstName, lastName, age, hairColor}=props; //desestructuracion de props
  return (
    <div className='card border-info mb-3 mx-auto'>
        <div className='card-header'>
            <h2>{lastName}, {firstName}</h2>
        </div>
        <div className='card-body'>
            <p className='card-title'>Age : {age}</p>
            <p className='card-title'>Hair Color : {hairColor}</p>
        </div>
    </div>
  )
}

export default PersonCard