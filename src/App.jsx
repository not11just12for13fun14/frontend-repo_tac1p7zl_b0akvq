import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Exhibitions from './components/Exhibitions'
import Collection from './components/Collection'
import Visit from './components/Visit'
import Tickets from './components/Tickets'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Exhibitions />
        <Collection />
        <Visit />
        <Tickets />
        <footer className="py-10 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Nederlands Museum voor Moderne Kunst</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-black">Nieuwsbrief</a>
              <a href="#" className="hover:text-black">Pers</a>
              <a href="#" className="hover:text-black">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
