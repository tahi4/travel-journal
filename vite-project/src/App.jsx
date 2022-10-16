import { useState } from 'react'
import Nav from './Nav'
import Card from './Card'
import datas from './Datas'
import './index.css'

function App(){
    const [count, setCount] = useState(0)

const cards = datas.map(function(data){
return (
    // we put the values inside our card component
<Card 

 key={data.id}
 img={data.img}
 location={data.country}
 desc={data.desc}
 place={data.place}
 time={data.time}
 link={data.link}

// the text in yellow is the values we put inside prop
// the text in blue is the values we gave inside the data.jsx file
// Ive put the location/country data different names 
//so you can understand better :)


/>)
})


    return (
     <div>

      <Nav />
      <section>

        {cards}

      </section>

     </div>
)
}

export default App