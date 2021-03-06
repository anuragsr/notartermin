/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import moment from "moment"
import 'moment/locale/de'
import DateTime from "react-datetime"
import HttpService from "../services/HttpService"

import "react-datetime/css/react-datetime.css"

const l = console.log.bind(window.console)

, Step1 = ({ isNext, isCurrent, isPrev, setForm, formData, navigation }) => {
  const { matter } = formData
  , { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , matters = [
    "Beglaubigung",
    "Grundstückkaufsvertrag",
    "Wohnungskauf",
    "Ehevertrag",
    "GmbH Gründung",
    "KG Gründung",
    "AG Gründung",
    "Vorsorgevollmacht",
    "Testament",
    "Bestellung Prokura",
  ]

  return (
    <div className={`page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">
        
        <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>Für welche Angelegenheit benötigen Sie einen Notar?</h4>
          </label>
          <select 
            className="select form-control"
            name="matter" 
            value={matter} 
            onChange={setForm}>
            {matters.map((value, idx) => (
              <option key={idx} value={value}>{value}</option>
            ))}
          </select>          
          <div className="ctn-submit">
            <button className="btn btn-lg btn-cta" onClick={next}>Weiter</button>
          </div>
        </div>

      </div>
    </div>
  )
}

, Step2 = ({ isNext, isCurrent, isPrev, setForm, formData, navigation }) => {
  const { details } = formData
  , { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""

  return (
    <div className={`page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>Beschreiben Sie ihren Betreff ausführlich.</h4>
          </label>
          <textarea
            className="textarea form-control"
            name="details" 
            value={details} 
            placeholder="Geben Sie die Angelegenheit hier ein"
            onChange={setForm}
            >
          </textarea>
          <div className="ctn-submit">
            <button 
              className="btn btn-lg btn-cta" 
              onClick={next}
              disabled={!details.length}
              >Weiter</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

, Step3 = ({ isNext, isCurrent, isPrev, date, setDate, navigation }) => {  
  const { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , yesterday = DateTime.moment().subtract( 1, 'day' )
  , validDate = current => current.isAfter(yesterday)
  , setDateValue = e => {
    // l(e, typeof e) 
    if(typeof e === "object") setDate(e.toDate())
    else setDate(e)
  }

  return (
    <div className={`page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>Wählen Sie einen Termin zum Rückruf aus.</h4>
          </label>
          <DateTime 
            closeOnSelect 
            locale="de" 
            isValidDate={validDate} 
            value={date}
            onChange={setDateValue}
            inputProps={{
              className: "input form-control",
              placeholder: "Wählen Sie ein Datum und eine Uhrzeit",
            }}
          />
          <div className="ctn-submit">
            <button 
              className="btn btn-lg btn-cta" 
              onClick={next}
              disabled={!moment(date).isValid()}
              >Weiter</button>
          </div>
          {/* <div className="row">
            <div className="col-md-6">
            </div>
          </div>   */}
        </div>

      </div>
    </div>
  )
}

, Step4 = ({ isNext, isCurrent, isPrev, setForm, formData, navigation }) => {
  const { city } = formData
  , { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , cities = [
    "Berlin",
    "Munich",
    "Frankfurt",
  ]
  return (
    <div className={`page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>In welcher Stadt benötigen Sie einen Notar?</h4>
          </label>
          <select 
            className="select form-control"
            name="city" 
            value={city} 
            onChange={setForm}>
            {cities.map((value, idx) => (
              <option key={idx} value={value}>{value}</option>
            ))}
          </select>          
          <div className="ctn-submit">
            <button className="btn btn-lg btn-cta" onClick={next}>Weiter</button>
          </div>
        </div>

      </div>
    </div>
  )
}

, Step5 = ({ isNext, isCurrent, isPrev, date, setForm, formData, navigation }) => {
  const { firstName, lastName, email, phone } = formData
  , { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , [isAccept, setAccept] = useState(false)
  , isEmailValid = emailStr => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(emailStr).toLowerCase())
  }
  , isFormValid = () => {
    return (
      firstName.length > 0
      && lastName.length > 0
      && isEmailValid(email)
      && isAccept
    )
  }
  , submitForm = e => {
    formData.date = date.toISOString().slice(0, 19).replace('T', ' ')
    // l(formData)
    new HttpService()
    .post('/process.php', { formData })
    .then(res => {
      const { data } = res
      // l(data)
      if(data.result) next(e)
      else alert(data.message)
    })
  }

  return (
    <div className={`contact page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>Tragen Sie ihre Daten unverbindlich ein.</h4>
          </label>
          <div className="form row">
            <div className="col-md-6">
              <label>Vorname</label>
              <input
                placeholder="Vornamen eingeben"
                className="input form-control"
                name="firstName"
                type="text"
                value={firstName} 
                onChange={setForm}/>
            </div>
            <div className="col-md-6">
              <label>Nachname</label>
              <input
                placeholder="Nachnamen eingeben"
                className="input form-control"
                name="lastName"
                type="text"
                value={lastName} 
                onChange={setForm}/>
            </div>
            <div className="col-md-6">
              <label>Email</label>
              <input
                placeholder="Email eingeben"
                className="input form-control"
                name="email"
                type="email"
                value={email} 
                onChange={setForm}/>
            </div>
            <div className="col-md-6">
              <label>Telefon (Optimal)</label>
              <input
                placeholder="Phone eingeben"
                className="input form-control"
                name="phone"
                type="text"
                value={phone} 
                onChange={setForm}/>
            </div>
          </div>
          <div className="custom-control custom-checkbox">
            <input 
              value="true"
              type="checkbox" 
              className="custom-control-input" 
              id="customCheck1"
              checked={isAccept}
              onChange={e => setAccept(e.target.checked)}
              />
            <label className="custom-control-label" htmlFor="customCheck1">
              Ich habe die <a href="#">Nutzungsbedingungen</a> gelesen.
            </label>
          </div>

          <div className="ctn-submit">
            <button 
              disabled={!isFormValid()}
              className="btn btn-lg btn-cta" 
              onClick={submitForm}>
              Weiter
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

, Step6 = ({ isNext, isCurrent, isPrev,  navigation }) => {
  const { previous, next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""

  return (
    <div className={`final page${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="text-center">
            <img src="assets/img/success.png" alt=""/><br/>   
            <label className="label">
              <h4>Alle Unterlagen sind eingegangen.</h4>
              <h6>Wir werden Sie benachrichtigen, sobald wir einen den geeigneten Notar in ihrer Nähe gefunden haben.</h6>
            </label>       
          </div>
          <div className="ctn-submit">            
            {/* <div className="btn-back" onClick={previous}>
              <span>&nbsp;&nbsp;Zurück</span>
            </div> */}
            <button className="btn btn-lg btn-cta" onClick={next}>Ok</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export { Step1, Step2, Step3, Step4, Step5, Step6 }
