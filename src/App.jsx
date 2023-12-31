import { useState } from 'react'
import './style/App.css'
import Select from './components/select'
import Config from './config/configData'
import GetJoke from './components/getJokeButton'

function App() {

  const [category, setCategory] = useState("Any")
  const [language, setLanguage] = useState("en")

  const handleSelectChange = (selectedOption, title) => {
    let option = selectedOption.name;
    let titleOption = title.title;
    if (titleOption === "Category") {
      setCategory(option); 
    }else if(titleOption === "Language"){
      if (option.includes("English")) {
        setLanguage("en")  
      }else{
        setLanguage("es")  
      }
    }             
  };

  return (
    <>
    <section className="h-screen flex justify-center items-center">
      <div className="detailsContainer text-[#000] bg-[#fff] md:p-20 p-8 rounded-3xl">
        <div className='md:min-w-[20rem] min-w-[16rem]'>
          <h1 className='text-center pb-6 text-2xl text-[#6b6aff]'>Generate a joke</h1>
                          
          {
          Config.map((item) => {            
            return (
              <>
              <div key={item.id} className={item.claseName + ' pb-6'} >
                <span className='font-semibold text-[#6b6aff]'>{item.name}</span>                 
                <Select title={item.name} options={item.opciones} onOptionChange={handleSelectChange}/>
              </div>              
              </>
            )
          })
          }   

          <div className='text-center pt-4'>
            <GetJoke category={category} language={language}/>
          </div>       

        </div>        
      </div>
    </section>
    </>
  )
}

export default App
