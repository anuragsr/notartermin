/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useForm, useStep } from "react-hooks-helper"
import "bootstrap/dist/js/bootstrap.bundle.min"

import Home from "./components/Home"
import { 
  Step1, Step2, Step3,
  Step4, Step5, Step6
} from "./components/Steps"

import "bootstrap/dist/css/bootstrap.min.css"
import "./scss/app.scss"

const l = console.log.bind(window.console)

export default function App() {
  const steps = [ 
    Home, Step1, Step2, 
    Step3, Step4, Step5, Step6
  ]
  , data = {
    matter: "Beglaubigung",
    odate:"",
    details: "",
    city: "Berlin",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }
  , [date, setDate] = useState(new Date())
  , [formData, setForm] = useForm(data)
  , { index, navigation } = useStep({ initialStep: 0, steps })
  , props = { 
    date, setDate, 
    formData, setForm, 
    navigation 
  }
  , navbarClass = `navbar navbar-light${!index ? " nav-home":""}`

  // const { index, step, navigation } = useStep({ initialStep: 0, steps })
  // const { id } = step

  return (
    <>
      <nav className={navbarClass}>
        <a 
          href={void(0)}
          className="navbar-brand" 
          onClick={() => navigation.go(0)}
          >Notartermin.com</a>
        <div className="ml-auto my-2 my-lg-0 nav-right">
          <div className="ctn-logo">
            <img className="pr" src="assets/img/logo-tr.png" alt=""/>
            <img className="sc" src="assets/img/logo1.png" alt=""/>
          </div>
        </div>
      </nav>
      {
        steps.map((Component, idx) => {
          return (
            <Component // Eg. Step1
              key={idx}
              isPrev={index === idx + 1} // 2
              isCurrent={index === idx}  // 1
              isNext={index === idx - 1} // 0
              {...props}
            />
          )
        })
      }      
    </>
  )  
}
