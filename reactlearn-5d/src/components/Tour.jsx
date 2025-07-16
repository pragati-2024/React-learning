import React from 'react'
import Card from './Card'

function Tour({tour,BtnHandler}){
  return (
    <div className='container'>
            <div>
                <h2 className='heading01'>Plan with love</h2>
            </div>
            <div className='card'>
                {
                    tour.map((tour)=>{
                        return <Card key = {tour.id} {...tour} BtnHandler={BtnHandler}/>
                    })
                }
            </div>
    </div>
  )
}

export default Tour