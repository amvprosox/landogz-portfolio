import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomeSectionOne from './components/HomeSectionOne/HomeSectionOne'
import Divider from './components/Divider/Divider'
import Benefits from './components/Benefits/Benefits'
import Floating from './components/Floating/Floating'
import ProjectCount from './components/ProjectCount/ProjectCount'
import Marquee from './components/Marquee/Marquee'
import AboutCompany from './components/AboutCompany/AboutCompany'
import OurArtworks from './components/OurArtworks/OurArtworks'
import CarouselCard from './components/CarouselCard/CarouselCard'
import TheTeam from './components/TheTeam/TheTeam'
import Faq from './components/FAQ/Faq'
import ContactUs from './components/ContactUs/ContactUs'
import ShortDesc from './components/ShortDesc/ShortDesc'
import Footer from './components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<HomeSectionOne />
	<Divider />
	<Benefits />
	<Divider />
	<ProjectCount />
	<Divider />
	<Marquee />
	<AboutCompany />
	<Divider />
	<OurArtworks />
	<Divider />
	<CarouselCard />
	<Divider />
	<TheTeam />
	<Divider />
	<Faq />
	<Divider />
	<ContactUs />
	<Divider />
	<ShortDesc />
	<Footer />
  </React.StrictMode>,
)
