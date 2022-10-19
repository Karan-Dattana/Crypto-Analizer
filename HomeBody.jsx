import React from 'react'
import './home.css'
import Tf from 'typewriter-effect'

function HomeBody() {
   
  return (
    
    <div className='hooo'>
        
        
        <div className='yooo'>



            <h2>
                
                <Tf 
                    options={
                        {
                            autoStart: true,
                            loop:true,
                            delay:40,
                            strings: [
                                "Your crypto",
                                "friendly website"
                            ]
                        }
                    }
                />
            </h2>
            <div>Your friendly cryptocurrency
                website</div>

            <p className='pp'>Description about crypto and ICO event in detail that you might find suitable</p>
            
            <p className='cc'>DEPLOY Ends in:</p>
            <div className='ends'>
                <div className='days'>02
                    <div>Weeks</div>
                </div>
                <div>|</div>
                <div className='days-x'>12
                    <div>Days</div>
                </div>
                <div>|</div>

                <div className='days'>03
                    <div>Hours</div>
                </div>
                <div>|</div>
                <div className='days-x'>27
                    <div>Minutes</div>
                </div>
                <div>|</div>
                <div className='days'>00
                    <div>Seconds</div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default HomeBody