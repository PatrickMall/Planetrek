import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h1>The Grand Tour II</h1>
        </motion.div>  
    )    
}
export default Home