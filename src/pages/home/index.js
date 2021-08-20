import React from 'react'
import '../home/home.css'
import NavBar from  '../../components/navBar/index'
import Cards from '../../components/cards/index'

const HomePage = () => {

    return (
        <div >
          <NavBar />
          <div className="container--cards--home">
            <Cards />
          </div>
    
        </div>
    )
}



export default HomePage

