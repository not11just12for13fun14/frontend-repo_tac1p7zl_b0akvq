import { motion } from 'framer-motion'

const exhibitions = [
  {
    title: 'Nieuwe golven',
    subtitle: 'Kunst in Nederland 1990–nu',
    image: 'https://images.unsplash.com/photo-1550948390-6eb7fa773072?q=80&w=1925&auto=format&fit=crop',
    date: 't/m 12 jan',
  },
  {
    title: 'Architectuur als taal',
    subtitle: 'De stedelijke verbeelding',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1932&auto=format&fit=crop',
    date: 't/m 3 feb',
  },
  {
    title: 'Lichtritme',
    subtitle: 'Installatie van Studio Lumina',
    image: 'https://images.unsplash.com/photo-1724188439186-508eb148d45c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaWNodHJpdG1lfGVufDB8MHx8fDE3NjMwOTk4NDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    date: 't/m 20 mrt',
  },
]

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-600">Nu te zien</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Tentoonstellingen</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-gray-700 hover:text-black">Bekijk alle</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((ex, i) => (
            <motion.article
              key={ex.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg bg-white"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img src={ex.image} alt={ex.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-gray-600">{ex.date}</p>
                <h3 className="text-xl font-semibold">{ex.title}</h3>
                <p className="text-gray-600">{ex.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
