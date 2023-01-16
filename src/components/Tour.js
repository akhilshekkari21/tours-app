import React,{useState} from 'react'

const Tour = ({id,name,info,image,price,removeTours}) => {
  const[readmore,setReadmore] = useState(false);
 
  return (
    <div>
      <img src={image}/>
      <h4>{name}</h4>
      <p>{readmore ? info : `${info.substring(0,200)}...`} </p>
      <button onClick={() => setReadmore(!readmore)}>{readmore ? 'showless':'readmore'}</button>
      
      <button onClick= {() => removeTours(id)}>not interested</button>

    </div>
  )
}

export default Tour