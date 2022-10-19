import React from 'react'
import './nav.css'
import Material from './Material'
function NavBar() {
  return (
    <div className='nav'>
        
        <div>
            <div>
                <img src="https://cdn.logojoy.com/wp-content/uploads/20200305144650/Bitcoin-icon.png" alt="logo" />
                <h1>
                    <button className='b'>A</button>
                    <button className='b'>n</button>
                    <button className='b'>a</button>
                    <button className='b'>l</button>
                    
                    <button className='bb'>i</button>
                    <button className='bb'>z</button>
                    <button className='bb'>e</button>
                    <button className='bb'>r</button>
                    
                    
                </h1>
            </div>
            


            <div className='contend'>
                <h3>
                   
                   
                    Home
                </h3>
                <h3>
                    Coins
                </h3> 
                
                <h3>
                    About
                </h3>

                {/* <div className='material'>
                    <Material />
                </div> */}
            </div>
            
        </div>
       

    </div>
  )
}

export default NavBar