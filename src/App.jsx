import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        
      </Route>
    </>
  )
)

export default App