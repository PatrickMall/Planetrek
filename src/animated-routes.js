import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import Saturn from './saturn'
import Jupiter from './jupiter'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/saturn' element={<Saturn />} />
                <Route path='/jupiter' element={<Jupiter  />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes