import React from 'react'
import Button from 'react-bootstrap/Button';
function Catbuttons({food,filtercategory,displayprods}) {
    const cat=[...new Set(food.map((f)=>f.category))]
  return (
    <div>
        <Button variant="dark" 
                className='rounded-pill px-3 fs-5 me-4' onClick={()=>displayprods()}>All</Button>
              {cat.map((c)=>{
                        return(
                            <Button variant="dark" 
                            className='rounded-pill px-3 fs-5 me-4' onClick={()=>{filtercategory(c)}}>{c}</Button>
                        )
                    })}
    </div>
  )
}

export default Catbuttons