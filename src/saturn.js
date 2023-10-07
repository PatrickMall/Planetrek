import SaturnModel from "./saturnModel"

const Saturn = () => {
    return (
        <div className="flex">
            <div className="ml-32 mt-8">
                <h1 className="text-white headerFont text-6xl">Saturn</h1>
                <div className="absolute left-96 bottom-24 headerFont border-white border-4 p-4 appear rounded">
                    <p className="text-white text-xl type">Hydrogen and Helium Atmosphere</p>
                    <p className="text-white text-xl type">Eight rings</p>
                    <p className="text-white text-xl type">146 moons</p>  
                </div>
                <div>
                    <p className="text-white bodyFont absolute w-6/12 mt-8 leading-8">One of the team's favourite trips we shall be taking our speedy shuttle Statham-2 to ride through the plumes of ice close to the surface, It will be an experience not to be missed as you sit in the observation pods at the helm of the craft experiencing the closest you can get to flying through these powerful eruptions of ice grains containing a rich array of minerals and organic compounds – including the ingredients for amino acids this chemical signature of substantial amounts of phosphorus salts inside icy particles ejected into space by the small moon’s plume could be signals for life yet to be discovered . Protected by veggie plastic plastic and Planetreks very on ShieldSafe ™  technology thrill seekers will have the time of their lives on this most invigorating excursion

                    </p>
                </div>
            </div>
            <div className="">
                <SaturnModel />
            </div>
        </div>
    )
}
export default Saturn