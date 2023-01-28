//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

fetch("https://www.swapi.tech/api/people/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))
fetch("https://www.swapi.tech/api/planets/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))
fetch("https://www.swapi.tech/api/vehicles/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))

//render your react application
root.render(<Layout/>)

