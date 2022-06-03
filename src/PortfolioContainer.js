import React, { useState} from 'react'
import NavTabs from './NavTabs'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'

const PortfolioContainer = () => {
const [currentPage, setCurrentPage] = useState('Home')
    //use state set to Home

    const renderPage = () => {
        if(currentPage === 'Home'){
            console.log(currentPage)
            return <Home />
        }
        if(currentPage === 'About'){
            return <About />
        }
        if(currentPage === 'Skills'){
            return <Skills />
        }
        if(currentPage === 'Work'){
            return <Work />
        }
        return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

    {renderPage()}
    </div>
  )
}

export default PortfolioContainer