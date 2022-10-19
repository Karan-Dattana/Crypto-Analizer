import React from 'react'
import './blog.css'
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function Blog() {

    
  return (
    <div className='blog'>
        
        <div>
            <h1>Latest <span>Blogs</span></h1>
        </div>

        <div className='con'>
            <div className='bo'>
                <a href="https://cryptoapis.io/blog/106-the-merge-ethereums-transition-to-proof-of-stake">
                    <img src="https://cryptoapis.io/images/thumbs/lFl48iqdwIp4oUVsVyeP02Bwr8aZXWvXFg3LnWDy-370x180.png" alt="" />
                    <h3>The Merge: Ethereum’s Transition to Proof of Stake</h3>
                    <Button id='btn' variant="contained">BlockChain</Button>
                    <Button id='btn1' variant="contained">Etherium</Button>
                    <Button id='btn2' variant="contained">Update</Button>
                
                </a>
            </div>
            <div className='bo'>
                <a href="https://cryptoapis.io/blog/105-how-block-explorers-utilize-crypto-apis-blockchain-data">
                    <img src="https://cryptoapis.io/images/thumbs/wdsEfNcpNwdEEhmDB72x7bT0VWcTLr3p9xVDp6Ef-370x180.png" alt="" />
                    <h3>How Block Explorers Utilize Crypto APIs Blockchain Data</h3>
                    <Button id='btn' variant="contained">BlockChain</Button>
                    <Button id='btn1' variant="contained">Uecase</Button>
                    
                
                </a>
            </div>

            <div className='bo'>
                <a href="https://cryptoapis.io/blog/105-how-block-explorers-utilize-crypto-apis-blockchain-data">
                    <img src="https://cryptoapis.io/images/thumbs/WUQ5thCIK4LUyxMjLJr277aCdnji8B6I6PJIIVQZ-1000x500.png" alt=""  className='uf'/>
                    <h3>What You Need to Know About Bitcoin Nodes</h3>
                    <Button id='btn' variant="contained">BlockChain</Button>
                    <Button id='btn1' variant="contained">Knowledge</Button>
                    <Button id='btn2' variant="contained">Nodes</Button>
                
                </a>
            </div>


            
        </div >
        
        <div className='ho'>
            <a href="https://cryptoapis.io/blog">
                <Button id="full" variant="text"> <b>Full Blog</b> </Button>
                

            </a>
            
        </div>
        <div><h2>Rate our website</h2></div>
        
        <div className='rate'>
            
                <Rating id= "r" name="size-large" defaultValue={1} size="large"  />
        </div>

        
        
        
        
        
    </div>
  )
}

export default Blog