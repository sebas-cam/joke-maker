import { useState } from 'react'
import Swal from 'sweetalert2'

function GetJoke({category, language}) {

    const [loader, setLoader] = useState(null)

    const handleClick = () => {
        setLoader("ok")
        fetch("https://v2.jokeapi.dev/joke/"+category+"?lang="+language)
        .then((response) => response.json())
        .then((data) =>{     
            setLoader(null)       
            console.log(data)
            if (data.type === "single") {
                Swal.fire(`${data.joke}`,)
            }else if(data.type === "twopart"){
                Swal.fire(
                    `${data.setup}`,
                    `${data.delivery}`,                
                )
            }           

        })
    }

    return(
        <>
            <button className='getJoke' onClick={()=>handleClick()}>                
                {loader != null && 
                    <div className="lds-dual-ring"></div>
                }
                {loader == null && 
                    <span>Generate Joke</span>
                }                
            </button>
        </>
    )
}

export default GetJoke;