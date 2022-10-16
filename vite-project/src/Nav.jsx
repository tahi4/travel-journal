import { useState } from 'react'
import Globe from './assets/Fill 213.png'
import './Nav.css'




function Nav() {
  const [count, setCount] = useState(0)

  return (
   <div className='Nav'>
   {/* Ive made two divs because - first div nav has a width 100% and is red  */}
   {/* nav text basically centers both of those texts together with space */}
  <div className='Nav--text'>

    <img src={Globe}/>
    <p>my travel journal.</p>

  </div>
   
   </div>
   
  )
}

export default Nav