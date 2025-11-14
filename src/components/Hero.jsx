import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-rose-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="uppercase tracking-[0.3em] text-xs text-gray-600">Amsterdam, Nederland</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Waar heden en toekomst van kunst samenkomen
            </h1>
            <p className="text-gray-600 max-w-xl">
              Een museum gewijd aan baanbrekende kunst, architectuur en design. Ontdek internationale tentoonstellingen, Nederlandse iconen en gedurfde nieuwe stemmen.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#tickets" className="inline-flex items-center rounded-full bg-black text-white text-sm px-5 py-3 hover:bg-gray-900 transition-colors">Koop tickets</a>
              <a href="#exhibitions" className="inline-flex items-center rounded-full border border-gray-300 text-sm px-5 py-3 hover:bg-gray-900 hover:text-white transition-colors">Tentoonstellingen</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border border-black/5 rounded-2xl p-4 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-gray-600">Huidige tentoonstelling</p>
              <p className="font-semibold">Nieuwe golven: Kunst in Nederland 1990–nu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
