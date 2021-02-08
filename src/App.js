import './reset.css'
import './App.css'
import Header from './Components/Header'
import Shelf from './Components/Shelf'

function App() {
  return (
    <section>
        <div>
          <Header/>
        </div>
        <section className="main-content">
          <div id="char-background">
            <h2 className="title">Characters</h2>

          </div>
          <div id="shelf-background">
              <h2 className="title">Compare List</h2>
          </div>
        </section>
    </section>
  )
}

export default App
