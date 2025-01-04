import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import dummydata from './dummydata.js'


function App() {

  const sortedLeaderboard = dummydata.sort((a, b) => b.money - a.money)
  
  const leaderBoardItems = dummydata.map((user) => {
    return (
      <Leaderboard
        key={user.id}
        name={user.name}
        money={user.money}
      />
    )
  })

  return (
    <>
      <Header />

      <main className="container">

        <article className="leaderboard">
          <div className="leaderboard-header">
            <span className="header-name">Name</span>
            <span className="header-money">Earnings 💵</span>
          </div> 
          <ul className="leaderListItems">
            {leaderBoardItems}
          </ul>  
        </article>
        
      </main>

      <Footer />
    </>
  )
}

export default App
