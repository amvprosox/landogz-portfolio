import React from 'react'
import { gsap } from "gsap";
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import Experts from './pages/Experts/Experts'
import { Rolan } from './pages/Experts/Members/Rolan'
import { Prosox } from './pages/Experts/Members/Prosox'
import { Olok } from './pages/Experts/Members/Olok'
import { Jemuel } from './pages/Experts/Members/Jemuel'
import { Contact } from './pages/Contact/Contact';
import { Date } from './pages/Date/Date';
import { AboutCompany } from './pages/About/AboutCompany';

import './index.css'

import { 
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom"



const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage/>,
	},
	{
		path: "experts",
		element: <Experts/>,
	},
	{
		path: "rolan",
		element: <Rolan/>,
	},
	{
		path: "prosox",
		element: <Prosox/>,
	},
	{
		path: "olok",
		element: <Olok/>,
	},
	{
		path: "jemuel",
		element: <Jemuel/>,
	},
	{
		path: "contact",
		element: <Contact/>,
	},
	{
		path: "appointment",
		element: <Date/>,
	},
	{
		path: "about",
		element: <AboutCompany/>,
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
    >
		<RouterProvider router = {router} >
			<AnimatePresence />
		</RouterProvider>
	</motion.div>
  </React.StrictMode>,
)
