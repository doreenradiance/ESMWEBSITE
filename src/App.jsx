import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Impact from './components/Impact'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
