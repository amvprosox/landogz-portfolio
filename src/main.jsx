import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import Experts from './pages/Experts/Experts'
import { Rolan } from './pages/Experts/Members/Rolan'
import { Prosox } from './pages/Experts/Members/Prosox'
import './index.css'

import { 
	createBrowserRouter,
	RouterProvider,
	Route,
} from "react-router-dom"
import { Olok } from './pages/Experts/Members/Olok'

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
	}
	,
	{
		path: "olok",
		element: <Olok/>,
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<RouterProvider router = {router} />
  </React.StrictMode>,
)
