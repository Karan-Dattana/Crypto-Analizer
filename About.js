import React from 'react'
import './about.css'


function About() {
  return (
    <div className='about'>
        <div className='img'>
            <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/19/2018/05/Laptop-Pro1.png" alt="" />
        </div>

        <div className='co'>
            <div className='aw'>
                <h1>About <span className='span' >Website</span></h1>
            </div>


            <div className='ab'>
            A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it. It is a decentralized system for verifying that the parties to a transaction have the money they claim.


                <p> <span className='span'>Crypto currency in India</span> eget diam facilisis lacinia ac id massa. Nulla facilisi. Duis ornare facilisis ex non porttitor. Suspendisse potenti. Sed luctus suscipit tincidunt. Ornare facilisis ex non porttitor. Suspendisse potenti. Sed luctus suscipit tincidunt.</p>
                
            </div>

            <div className='perc'>
                <h2>CRYPTO</h2>
                <div className='per1'></div>
            </div>

            <div className='perc'>
                <h2>INFORMATION</h2>
                <div className='per2'></div>
            </div>
            <div className='perc'>
                <h2>BUY/SELL</h2>
                <div className='per3'></div>
            </div>
        </div>
        
    </div>
  )
}

export default About