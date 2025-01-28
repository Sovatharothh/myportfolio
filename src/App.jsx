import styles from './App.module.css'
import { Navbar } from './components/navbar/navbar'
import {Roth} from './components/Roth/Roth'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import {Project} from './components/Project/Project'
import { ExchangeProgram} from './components/ExchangeProgram/ExchangeProgram'
import {Contact} from './components/Contact/Contact'


function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Roth/>
      <About/>
      <Experience/>
      <Project/>
      <ExchangeProgram/>
      <Contact/>
    </div>
  )
}

export default App
