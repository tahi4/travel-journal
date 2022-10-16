import { useState } from 'react'
import './Card.css'
import emoji from './assets/Fill 220.png'


  function Card(props) {
    const [count, setCount] = useState(0)
  console.log(props)
    return (

<div className='Card'>

    <img src={props.img}/>
{/* ive made a div where all the text goes, so that its easier to format the text and img side-by-side later on */}
    <div className='Card--text'>
    
         <div className='location'>

               <img src={emoji}/>
               <p>{props.location}</p>
               <a href={props.link}>View on Google Maps</a>
    
         </div>
         <div className='location--info'>

              <h1>{props.place}</h1>
              <h5>{props.time}</h5>
              <p>{props.desc}</p>

        </div>
    </div>
</div>
     
    )
  }
  
 export default Card