import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="cta" className="py-16 bg-emerald-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-emerald-700/40 p-8 sm:p-12 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold">Turn extras into opportunities</h2>
              <p className="mt-3 text-emerald-50 max-w-2xl mx-auto">
                Post your donation or request in minutes. Our smart matching and NGO auto-assignment ensure help reaches the right hands.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#donate" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-emerald-700 font-medium hover:bg-emerald-50">Donate an item</a>
                <a href="#receive" className="inline-flex justify-center rounded-md border border-white/20 px-5 py-3 text-white font-medium hover:bg-emerald-600/30">Request help</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
