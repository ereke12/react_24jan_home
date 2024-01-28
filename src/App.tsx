import { Hero } from "./components/hero"
import { Partner } from "./components/partner"
import { Info } from "./components/info"
import { Help } from "./components/help"
import { Read } from "./components/read"
import { Footer } from "./components/footer"

import '../src/styles/reset.css'
import '../src/styles/all.css'
import '../src/styles/hero.css'
import '../src/styles/partner.css'
import '../src/styles/info.css'
import '../src/styles/help.css'
import '../src/styles/read.css'
import '../src/styles/footer.css'

function App() {

  return (
    <>
      <Hero />
      <Partner />
      <Info />
      <Help />
      <Read />
      <Footer />
    </>
  )
}

export default App
