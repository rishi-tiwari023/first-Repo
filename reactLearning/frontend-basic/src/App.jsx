import './App.css'
import MsgBox from './MsgBox.jsx';
import ProductTab from './ProductTab.jsx'

function App() {
  return (
    //react fragment to avoid unnecessary divs
    <MsgBox userName="Rishi Tiwari" color="red" />
  )
}

export default App
