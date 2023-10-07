import { motion } from "framer-motion"
import tourPoster from './static/NASA - grand_tour.width-1320.jpg'
import wishYouWhereHere from "./static/WISH YOU WERE HERE MARS.jpg"
import elevator from "./static/Saturn_and_Titan.jpg"
const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex">
                <div className="mt-72 w-8/12 ml-32">
                    <h1 className="text-white text-5xl headerFont mx-auto text-center">The Grand Tour II</h1> 
                    <div>
                    <img src={wishYouWhereHere} className=" mx-16 mt-16"/>
                        <h1 className="text-white text-3xl headerFont my-8 text-center">Wish You Were Here?</h1>
                        <h4 className="text-white text-2xl headerFont my-8 text-center">You no longer have to wish.</h4>
                        <p className="text-white bodyFont">The age-old dream of being able to travel to other worlds is now a reality - and not just for nation states, or corporations. Astronauts or scientists. The recently completed Space Elevator has transformed the economics of planetary travel - bringing the cost of a journey to the Moon and neighbouring planets in line with intercontinental airship travel. The entire Solar System is now open for exploration. By anyone.<br /><br />

Travelling from Spaceport Maldives on the Elevator, you will be greeted  by the most incredible views of the home world, as you rise up from the Indian Ocean in comfort. 8 hours later, you arrive at The Hub - stationed 36,000 kilometres above the Earth in Clarke Orbit. From here you transfer to one of Planetrek’s fleet of spacecraft - depending on your travel package plans. <br /><br />

Perhaps you have chosen a weekend break to visit the historic Apollo 11 landing site, and sample the purest water in the solar system from the ice craters of the Lunar South Pole? </p>
                </div>
                </div>
                <div className="mx-32 mt-8">
                    <img className="mt-64" src={tourPoster} />
                </div>
                
            </div>
            <div className="flex">
                <div className="ml-32">
                    <img src={elevator}/>
                </div>
                <div>
                    <p className="text-white bodyFont mx-32 mt-8">Maybe your tastes are more adventurous? Have you got what it takes to survive 6 months on the Red Planet with nothing to eat but potatoes grown in your own freeze-dried waste - just like the hero of the classic movie, ‘The Martian’?<br /><br />


From marvelling close up at the perpetual storm that is Jupiter’s great Red Spot, to seeing Saturn’s rings backlit by our sun - a view you can never have from Earth - there are experiences to be had that will last a lifetime.<br /><br />

And for those who wish to explore the very boundaries of our Solar System, be among the first to visit the strange ice system of Pluto and its 5 moons - newly reinstated as a fully-fledged planet. Welcome back, Pluto!<br /><br />

Please take a look at our audio & video testimonies from previous travellers, and get an honest, unfiltered impression of all that personal space exploration has to offer.<br /><br />

The Solar System is an incredible part of an incredible universe, and we now have the means to explore it fully. So what are you waiting for? Choose a destination. And stop wishing.<br /><br />

                    </p>
                </div>

            </div>
            <div>
                <h2 className="text-white text-3xl headerFont my-8 text-center">PLANETREK - When the world is not enough</h2>
            </div>
        </motion.div>  
    )    
}
export default Home