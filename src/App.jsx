import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>

      <NavBar />
      <ItemListContainer saludo={"Bienvenid@s a la tienda online de Melopea!"} />
    
    </div>
  )
}

export default App
