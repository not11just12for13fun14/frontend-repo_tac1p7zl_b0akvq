import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Visit() {
  return (
    <section id="visit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-600">Plan je bezoek</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Openingstijden & locatie</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><Clock className="h-5 w-5 mt-1" /><span>Dagelijks geopend 10:00–18:00, donderdag tot 22:00</span></li>
              <li className="flex items-start gap-3"><Calendar className="h-5 w-5 mt-1" /><span>Gesloten op 27 april en 25 december</span></li>
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1" /><span>Museumplein 10, 1071 DJ Amsterdam</span></li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg">
            <iframe
              title="Museum map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.874%2C52.356%2C4.889%2C52.365&layer=mapnik&marker=52.360%2C4.882"
              className="w-full h-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
