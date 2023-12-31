import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <nav id='navbar'>
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>
        <Link to='/movie/1'>movie</Link>
        <Link to='/search'>search</Link>
      </nav>
      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  )
}

export default App
