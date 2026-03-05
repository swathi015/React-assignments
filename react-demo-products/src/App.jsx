import './App.css'
import Products from './components/Products';

function App(){
  
  //state(optional)
  //return a react element(mandatory)
  return (
    <div className='text-center border-2 p-24 bg-gray-200'>
      <h1 className='text-5xl text-blue-400'>Products</h1>
      <Products />
    </div>
  )
}

export default App;


//jsx--javascript Syntax Extension
