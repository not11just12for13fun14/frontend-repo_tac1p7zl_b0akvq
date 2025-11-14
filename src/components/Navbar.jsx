import { useState } from 'react'
import { Menu, X, Museum } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Tentoonstellingen', href: '#exhibitions' },
    { label: 'Collectie', href: '#collection' },
    { label: 'Bezoek', href: '#visit' },
    { label: 'Tickets', href: '#tickets' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Museum className="h-6 w-6" />
            <span className="text-sm tracking-widest font-semibold">NEDERLANDS MUSEUM VOOR MODERNE KUNST</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#tickets" className="inline-flex items-center rounded-full bg-black text-white text-sm px-4 py-2 hover:bg-gray-900 transition-colors">Koop tickets</a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#tickets" onClick={() => setOpen(false)} className="inline-flex items-center w-max rounded-full bg-black text-white text-sm px-4 py-2">Koop tickets</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
