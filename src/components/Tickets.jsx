import { useState } from 'react'

const tiers = [
  { name: 'Volwassen', price: 20, note: '18+' },
  { name: 'Student', price: 12, note: 'Met geldige pas' },
  { name: 'Kind', price: 0, note: 't/m 18 jaar' },
]

export default function Tickets() {
  const [qty, setQty] = useState({ Volwassen: 1, Student: 0, Kind: 0 })
  const total = tiers.reduce((sum, t) => sum + t.price * (qty[t.name] || 0), 0)

  return (
    <section id="tickets" className="py-20 bg-gradient-to-t from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-600">Tickets</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Plan je bezoek</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-xl">€{t.price}</p>
                </div>
                <p className="text-gray-600 text-sm">{t.note}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setQty({ ...qty, [t.name]: Math.max(0, (qty[t.name]||0) - 1) })} className="w-8 h-8 rounded-full border">-</button>
                  <span className="w-8 text-center">{qty[t.name] || 0}</span>
                  <button onClick={() => setQty({ ...qty, [t.name]: (qty[t.name]||0) + 1 })} className="w-8 h-8 rounded-full border">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-black/5 bg-white p-6 shadow-sm h-max">
            <h3 className="font-semibold mb-3">Overzicht</h3>
            <ul className="space-y-2 text-sm">
              {tiers.map(t => (
                (qty[t.name]||0) > 0 && (
                  <li key={t.name} className="flex justify-between"><span>{t.name} × {qty[t.name]}</span><span>€{t.price * qty[t.name]}</span></li>
                )
              ))}
            </ul>
            <div className="mt-4 flex justify-between font-semibold text-lg">
              <span>Totaal</span>
              <span>€{total}</span>
            </div>
            <button className="mt-5 w-full rounded-full bg-black text-white py-3 hover:bg-gray-900">Afrekenen</button>
            <p className="mt-2 text-xs text-gray-500">Betaalopties verschijnen in een demo-popup (geen echte betaling).</p>
          </div>
        </div>
      </div>
    </section>
  )
}
