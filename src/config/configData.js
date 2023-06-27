const Config = [
    {
      "id":"1",
      "name":"Category",
      "opciones":[{name:"Any"},{name:"Programming"}, {name:"Misc"}, {name:"Dark"}, {name:"Pun"}, {name:"Spooky"}, {name:"Christmas"}],
      "claseName":"block",
      "funcion":"handleCategoryChange"
    },
    {
      "id":"2",
      "name":"Language",
      "opciones":[{name:"en - English"}, {name:"es - Spanish"}],
      "claseName":"block",
      "funcion":"handleLanguageChange"
    },
    {
      "id":"3",
      "name":"Flags (optional)",
      "opciones":[{name:"nsfw"}, {name:"religious"}, {name:"political"}, {name:"racist"}, {name:"sexist"}, {name:"explicit"}],
      "claseName":"hidden",
      "funcion":""
    }
]

export default Config;