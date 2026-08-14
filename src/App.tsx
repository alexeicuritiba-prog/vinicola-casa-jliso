import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Vinicola } from './components/Vinicola'
import { Vinhos } from './components/Vinhos'
import { Visite } from './components/Visite'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Vinicola />
        <Vinhos />
        <Visite />
      </main>
      <Footer />
    </>
  )
}
