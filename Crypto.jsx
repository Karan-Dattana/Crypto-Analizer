import React, { useEffect, useState } from 'react'
import './crypto.css'
import Card from './Card'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Tf from "typewriter-effect"



function Crypto() {
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

    const[coins , setCoins]= useState([]);
    const [search , setSearch] =  useState('');

    useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((response)=>{
        setCoins(response.data)
      })
      .catch((error)=>{console.log(error)})
    },[])


    const yo =(e) =>{
      setSearch(e.target.value)


    }

    const yes = coins.filter((x)=>{
      return(x.name.toLowerCase().includes(search.toLowerCase()));
      
    })
    // const handleSearch = () => {
    //   return coins.filter(
    //     (coin) =>
    //       coin.name.toLowerCase().includes(search) ||
    //       coin.symbol.toLowerCase().includes(search)
    //   );
    // };

  return (
    <div className='cry'>

      <div>
        <div className='imgc'><img src="https://cdn.logojoy.com/wp-content/uploads/20200305144650/Bitcoin-icon.png" alt="" className='clogo' /></div>
        
        <h1>Crypto <span >Coins</span> </h1>
      </div>

      <div className='top10'>
        <h2>Top 10 crypto <span>coins in the world:</span>    </h2>

        

      </div>

      <div className='full'><input type="text" placeholder='search' onChange={yo}/></div>
      
      <div className='c'>
        
        {
          yes.map((e)=>{
            return(
              <Card key={e.id} name={e.name} symbol={e.symbol} image={e.image}  price={e.current_price}  />
            );
          }
            
          )
        }
        
        

      </div>


      
      
      
    </div>
  )
}

export default Crypto