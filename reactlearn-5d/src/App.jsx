import React from 'react'
import './App.css'
import { useState } from 'react'
import data from './data'
import Tour from './components/Tour'


function App() {

const [tour, setTour] = useState(data)

function BtnHandler(){
  const newTour = tour.filter(tour => tour.id !== id)
  setTour(newTour)
}

  
  return (
    <div>
      <Tour tour={tour} BtnHandler={BtnHandler}/>
    </div>
  )
}

export default App
