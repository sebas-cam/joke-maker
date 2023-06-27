import './style/App.css'
import Select from './components/select'
import Config from './config/configData'

function App() {

  return (
    <>
    <section className="h-screen flex justify-center items-center">
      <div className="detailsContainer text-[#000] bg-[#fff] p-20 rounded-3xl">
        <div className='min-w-[20rem]'>
          <h1 className='text-center pb-6 text-2xl text-[#6b6aff]'>Generate a joke</h1>
                          
          {
          Config.map((item) => {            
            return (
              <>
              <div key={item.id} className={item.claseName + ' pb-6'} >
                <span className='font-semibold text-[#6b6aff]'>{item.name}</span>                 
                <Select title={item.name} options={item.opciones}/>
              </div>              
              </>
            )
          })
          }   

          <div className='text-center pt-4'>
            <button className='getJoke'>Generate Joke</button>
          </div>       

        </div>        
      </div>
    </section>
    </>
  )
}

export default App
