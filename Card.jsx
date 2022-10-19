import React, { useState } from 'react'
import './end.css'
import Button from '@mui/material/Button';

function Card() {
    const [x , setX] =useState('')

    const d = ()=>{
        setX('');
    }
    const c =(e)=>{
        setX(e.target.value)
    }
  return (
    
    <form className='cardd' onSubmit={d}>
         <textarea name="sdf" id="dsadf" cols="30" rows="10" placeholder='Please Write your reviews' 
         value={x} onChange={c}></textarea>
         <div><Button variant="contained" onClick={d}>Submit</Button></div>
  
    </form>
  )
}

export default Card