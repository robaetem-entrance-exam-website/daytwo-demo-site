const beans = [
  { name: "Ethiopia Guji", notes: "Peach, jasmine, bergamot", price: "€14" },
  { name: "Colombia Huila", notes: "Red apple, caramel, cocoa", price: "€12" },
  { name: "Brazil Cerrado", notes: "Hazelnut, milk chocolate", price: "€11" },
];

export default function Home() {
  return (
    <main className="flex-1 bg-stone-50 text-stone-900">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold">Northwind Coffee</span>
        <nav className="flex gap-6 text-sm text-stone-600">
          <a href="#beans">Beans</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="max-w-2xl text-5xl font-semibold tracking-tight">
          Small-batch coffee, roasted every Monday in Ghent.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-stone-600">
          We buy directly from farms we visit and ship within two days of roasting.
        </p>
        <a
          href="#beans"
          className="mt-10 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
        >
          Shop beans
        </a>
      </section>

      <section id="beans" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold">This week&apos;s beans</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {beans.map((bean) => (
            <article key={bean.name} className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="font-medium">{bean.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{bean.notes}</p>
              <p className="mt-6 font-semibold">{bean.price} / 250 g</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="visit" className="mx-auto max-w-5xl px-6 py-16 text-sm text-stone-600">
        Northwind Coffee · Vrijdagmarkt 12, Ghent · Open Tue–Sun, 8:00–16:00
      </footer>
    </main>
  );
}
