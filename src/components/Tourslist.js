import React from 'react'
import Tour from './Tour';
const Tourslist = ({tours,removeTours}) => {

  return (
    <div>
        <h1>Tourslist</h1>
        {
            tours.map((tour) => {
                const{id,name,info,image,price} = tour;
                return(
                    <Tour key={id} {...tour} removeTours = {removeTours}/> 
                )
            })
        }
        </div>
  )
}

export default Tourslist