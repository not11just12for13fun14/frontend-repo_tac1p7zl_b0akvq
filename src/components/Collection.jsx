import { motion } from 'framer-motion'

const items = [
  {
    artist: 'Piet Mondriaan',
    work: 'Compositie met rood, geel en blauw',
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    artist: 'Cobra-groep',
    work: 'Experimentele schildering',
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    artist: 'Design NL',
    work: 'Stoel “De Stijl”',
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-600">Collectie</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Hoogtepunten</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-gray-700 hover:text-black">Zoek in collectie</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.work}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 bg-white shadow"
            >
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img src={item.image} alt={item.work} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.artist}</h3>
                <p className="text-gray-600">{item.work}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
