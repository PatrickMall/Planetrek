import { useState } from "react"
import { Link } from "react-router-dom"
const NavItem = ({ label, url }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            
            <h3 className="text-xl text-white headerFont mx-8" onClick={() => {setIsOpen(prevState => !prevState)}}>{label}</h3>
            {isOpen && (<div className="bg-black">
                <Link to="/saturn">
                    <h4 className="text-white headerFont text-center text-xl mt-4" onClick={() => { setIsOpen(prevState => !prevState) }}>Mars</h4>
                </Link>
                <Link to="/jupiter">
                    <h4 className="text-white headerFont text-center text-xl" onClick={() => { setIsOpen(prevState => !prevState) }}>Jupiter</h4>
                </Link>
                <Link to="/saturn">
                    <h4 className="text-white headerFont text-center text-xl" onClick={() => {setIsOpen(prevState => !prevState)}}>Saturn</h4>
                </Link>
                <Link to="/saturn">
                    <h4 className="text-white headerFont text-center text-xl" onClick={() => { setIsOpen(prevState => !prevState) }}>Uranus</h4>
                </Link>
                <Link to="/saturn">
                <h4 className="text-white headerFont text-center text-xl" onClick={() => { setIsOpen(prevState => !prevState) }}>Neptune</h4>
                </Link>
            </div>)}
            
        </div>
    )
}
export default NavItem