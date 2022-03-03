import React from 'react'
import Body from './Body'
import Card from './Card'
import Header from './Header'
import Member from './Member'


const Main = () => {
  return (
    <div className='maindiv'>
        <div className="opp">
        <Header />
        <Body />
        <Card />
        <Member />
        </div>

    </div>
  )
}

export default Main