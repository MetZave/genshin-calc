import './reset.css'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Shelf from './Components/Shelf'

function App() {
  return (
    <section>
        <div>
          <Header/>
        </div>
        <section className="main-content">
          <div id="char-background">
            <h2 className="title">Select Character to Calculate DPS</h2>
            <Main/>
          </div>
          <div id="shelf-background">
              <h2 className="title">Selected Characters</h2>
          </div>
        </section>
    </section>
  )
}

export default App
