import React from 'react'
import Nav from './Nav'
import SecOne from './SecOne'
import SecTwo from './SecTwo'
import About from './About'
import Project from './Project'
import Exp from './Exp'
import Connect from './Connect'
import Skills from './Skills'
import Form from './Form'

const Main = () => {
  return (
    <div>
        <Nav/>
        <SecOne/>
        <About/>
        <SecTwo/>
        <Project/>
        <Skills/>
        <Connect/>
        <Form/>
        
        {/* <Exp/> */}


    </div>
  )
}

export default Main
