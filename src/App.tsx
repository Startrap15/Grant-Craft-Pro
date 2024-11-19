import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './components/Navigation'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import Checkout from './pages/Checkout'
import Portal from './pages/Portal'
import ConsultationModal from './components/ConsultationModal'
import Chatbot from './components/Chatbot'

const queryClient = new QueryClient()

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showConsultation, setShowConsultation] = useState(false)

  const handleConsultationClick = () => {
    setShowConsultation(true)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopBar />
        <Navigation 
          onConsultationClick={handleConsultationClick}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
        
        {currentPage === 'home' && <Home onConsultationClick={handleConsultationClick} />}
        {currentPage === 'resources' && <Resources />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'checkout' && <Checkout />}
        {currentPage === 'portal' && <Portal />}

        <ConsultationModal 
          isOpen={showConsultation}
          onClose={() => setShowConsultation(false)} 
        />
        
        <Chatbot />
      </div>
    </QueryClientProvider>
  )
}

export default App