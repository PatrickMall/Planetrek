import NavItem from "./common/NavItem"
import { useState } from "react"
const NavBar = ({ logo }) => {
    
    
    return (
        <div className="flex justify-between fixed bg-black">
            <img src={logo} className="w-72 mt-8 ml-8"/>
            <div className="flex justify-between w-100 mt-8 ml-20">
            <NavItem label={'The Grand Tour II'} />
            <NavItem label={'Packages'} />
            <NavItem label={'The Planets'}/>
            <NavItem label={'Your Spacecraft'} />
            <NavItem label={'Nasa Heritage'} />
            <NavItem label={'Contact'} />
            </div>
            
            
        </div>
    )
}
export default NavBar