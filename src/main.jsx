import React from 'react'
import { gsap } from "gsap";
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import Experts from './pages/Experts/Experts'
import { Rolan } from './pages/Experts/Members/Rolan'
import { Prosox } from './pages/Experts/Members/Prosox'
import { Olok } from './pages/Experts/Members/Olok'
import { Jemuel } from './pages/Experts/Members/Jemuel'
import './index.css'

import { 
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom"
import { Contact } from './pages/Contact/Contact';


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
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<RouterProvider router = {router} />
  </React.StrictMode>,
)
