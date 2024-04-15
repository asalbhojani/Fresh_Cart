import React from 'react'
import Categories from './Categories'
import SuperSaver from './SuperSaver'
import Fruits from './Fruits'
import Juices from './Juices'
import Snacks from './Snacks'
import Featured from './Featured'

const Cards = () => {
  return (
    <div>
        <Categories/>
        <SuperSaver/>
        <Featured/>
        <Fruits/>
        {/* <Juices/>
        <Snacks/> */}
    </div>
  )
}

export default Cards