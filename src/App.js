import AnimatedRoutes from './animated-routes';
import './App.css';
import NavBar from './navbar';
import logo from './static/379642882_285380554260639_877898686765722723_n.png'


function App() {
 
  return (
    <>
      <NavBar logo={logo} />
      <AnimatedRoutes />
    </>
  )
}

export default App;
