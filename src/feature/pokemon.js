import React from 'react'

const Pokemon = ({details}) => {
  return (
    <div>
        <p>Species Name : {details.species.name}</p>
        <p>Species URL : {details.species.url}</p>
        <p>Base Experience:{details.base_experience}</p>
        <p>Weight:{details.weight}</p>
        <p>Height:{details.height}</p>
        <p> Ability Name : {details.abilities[0].ability.name}</p>
        <p>{details.forms.keys()}</p>
    
        
    </div>
  )
}

export default Pokemon;