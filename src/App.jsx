import './style/App.css'
import Select from './components/select'
import { useEffect } from 'react'

function App() {

  const Config = [
    {
      "name":"Category",
      "opciones":["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"] 
    },
    {
      "name":"Language",
      "opciones":["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"]
    },
    {
      "name":"Flags",
      "opciones":["en - English", "es - Spanish"]
    }
  ]

  useEffect(()=>{
    console.log(Config)
  }, [])

  return (
    <>
    <section className="h-screen flex justify-center items-center">
      <div className="detailsContainer text-[#000] bg-[#fff] p-20 rounded-3xl">
        <div className='min-w-[20rem]'>
          <h1>Generate a joke</h1>
          
          <span>Categoria</span>
          <Select/>
          
        </div>        
      </div>
    </section>
    </>
  )
}

export default App
