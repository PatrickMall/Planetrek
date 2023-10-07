import JupiterModel from "./jupiterModel"
import ioPhoto from "./static/cf-1280.jpg"
import europaPhoto from "./static/pia19048.jpg"
const Jupiter = () => {
    return (
        <div>
            <div className="flex">
            <div className="absolute right-32 top-56 headerFont border-white border-4 p-4 appear rounded">
                        <p className="text-white text-xl type">Hydrogen and Helium Atmosphere</p>
                        <p className="text-white text-xl type">Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth</p>
                        <p className="text-white text-xl type">80-95 moons</p>  
                    </div>
                <div className="ml-32 mt-72">
                    <h1 className="text-white headerFont text-6xl">Jupiter</h1>
                    
                    <div>
                        <p className="text-white bodyFont w-6/12 mt-8 leading-8">Jupiter, named for the king of the ancient Roman gods, is the largest planet in the solar system – more than twice as big as all the other planets combined.
                            Jupiter's stripes are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.</p>
                        <h4 className="headerFont text-white mt-8 text-2xl">Storm Trip</h4>
                        <p className="text-white bodyFont w-6/12 mt-8 leading-8">
                        Take shuttle Bradbury-1 to four thousand kilometers above the cloud tops and witness the zonal winds each going in different directions generating mesmerising eddies, storms and pop up clouds; bright clouds thought to be parcels of air pushed up to the altitude at which ammonia ice condenses.
    Accompanied by our Jupiter expert Simon Brett you will learn everything you need to know about the fifth planet from the sun. Each passenger will receive a free holographic oil painting created by Simon himself!
                        </p>
                        <h4 className="headerFont text-white mt-8 text-2xl">Jupiter's Moons</h4>
                        <p className="text-white bodyFont mt-8 w-6/12 leading-8">You will have options to explore with one rotation out of the 95 moons the four main galilean moons orbiting Jupiter. These excursions only come with the Platinum package.
                            Each trip will be run by Planetrek’s very own Moon Experts Matt and Kristen via two smaller shuttles Orwell 1 and Orwell 2.</p>
                        <h4 className="headerFont text-white mt-8  text-2xl">IO</h4>
                        <p className="text-white bodyFont mt-8 w-6/12 leading-8">Io is still the most volcanically active celestial body in the solar system, with volcanoes erupting lava fountains dozens of kilometres high. The shuttle will circumnavigate two of the most active volcanoes then will swoop between the two titans skimming the lakes of molten silicate lava . With extra tough SmartShielding ™  you will be able to witness the relentless power of this small world in relative comfort and safety. It’s a wild ride but you won’t spill your cocktails! </p>
                        <img className="w-6/12 mt-8" src={ioPhoto} />
                        <p className="text-white bodyFont mt-8 w-6/12 leading-8">A NASA spacecraft sees a volcanic explosion on Jupiter’s third-largest moon.</p>
                        <h4 className="headerFont text-white mt-8  text-2xl">EUROPA</h4>
                        <p className="text-white bodyFont mt-8 w-6/12 leading-8">Europa’s rocky mantle has an ocean of salty water below a worldwide slush of partially frozen water. This water was discovered in 2030 by Nasa’s Europa Clipper;  the probe was also sent to see if conditions were right for harbouring life. Unfortunately we are still hunting for the elusive extremophiles but you can fly close to the surface and watch through our veggie plastic bubble balconies as the ice moves and cracks due to the undulating ocean and imagine yourself what may lay deep within the sea or perhaps actually dive into the oceans via the 40 foot fissures (This is for extreme sports enthusiasts only with a full medical check before and after the experience). This worldwide body of water is affected by Europa’s special type of magnetic field induced within the world itself by its deep layer of this electrically conductive fluid. </p>
                        <img className="w-6/12 mt-8" src={europaPhoto} />
                    </div>
                </div>
                <div className="absolute left-96 top-64">
                    <JupiterModel />
                </div>
            </div>
    </div>
    )
}
export default Jupiter