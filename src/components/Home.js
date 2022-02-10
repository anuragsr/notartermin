/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Home = ({ isCurrent, isPrev, navigation }) => {
  const { next } = navigation
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""

  return (
    <div className={`home page${isCurrentClass}${isPrevClass}`}>

      <div className="hero">
        <div className="ctn-title text-center">
          <div className="title">Sie benötigen einen<br/> Notartermin?</div>
          <button onClick={next} className="btn btn-lg btn-cta btn-def">Termin vereinbaren</button>
          <br/><img className="rating" src="assets/img/rating.png" alt=""/>
          <div className="sub-title">(kostenfrei)</div>
        </div>
      </div>

      <div className="container">

        <div className="section section1">
          <div className="title">Wir decken alle<br/> Rechtsbereiche ab</div>
          <div className="row ctn-box">
            <div className="col-md-4 col-6">
              <div className="box">
                <img src="assets/img/icon-box.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
            <div className="col-md-4 col-6 mb-4">
              <div className="box">
                <img src="assets/img/icon-2.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
            <div className="col-md-4 col-6 mb-4">
              <div className="box">
                <img src="assets/img/icon-box.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
            <div className="col-md-4 col-6 mb-4">
              <div className="box">
                <img src="assets/img/icon-2.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
            <div className="col-md-4 col-6 mb-4">
              <div className="box">
                <img src="assets/img/icon-box.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
            <div className="col-md-4 col-6 mb-4">
              <div className="box">
                <img src="assets/img/icon-2.jpg" alt=""/>
                <span>Familienrecht</span>
              </div>
            </div>
          </div>        
        </div>

        <div className="section section2">
          <div className="title">Wie funktioniert es?</div>
          <div className="row ctn-steps">
            <div className="col-md-8 col-12">
              <div className="row">
                <div className="text-center col-2"><h4 className="no">1</h4></div>
                <div className="col-10">
                  <h4>Fragebogen ausfüllen</h4>
                  <h6>Zum Loslegen einfach Fragebogen ausfüllen, Kontaktdaten eingeben und absenden.</h6>
                </div>
              </div>
              <div className="row">
                <div className="text-center col-2"><h4 className="no">2</h4></div>
                <div className="col-10">
                  <h4>Termin vereinbaren</h4>
                  <h6>Zum Loslegen einfach Fragebogen ausfüllen, Kontaktdaten eingeben und absenden.</h6>
                </div>
              </div>
              <div className="row">
                <div className="text-center col-2"><h4>3</h4></div>
                <div className="col-10">
                  <h4>Kostenloses Auftaktsgespräch</h4>
                  <h6>Zum Loslegen einfach Fragebogen ausfüllen, Kontaktdaten eingeben und absenden.</h6>
                </div>
              </div>
              <div className="text-center">
                <button onClick={next} className="btn btn-lg btn-cta btn-def">Jetz Termin vereinbaren</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section section3">
          <div className="title mb-4">
            Unsere Experten aus 16<br/> Hauptstädten
          </div>
          <div className="sub-title">
            Zum Loslegen einfach Fragebogen ausfüllen, Kontaktdaten eingeben und absenden.
          </div>
          <img className="rating" src="assets/img/rating.png" alt=""/><br/>
          <img className="img-exp" src="assets/img/expert.png" alt=""/>
          <div className="img-desc">Paul J. Müller, Anwaltstermin Experte</div>
        </div>

        <div className="section footer">
          <div className="title mb-4">
            Notartermin.com
          </div>
          <div className="sub-title">
            Zum Loslegen einfach Fragebogen ausfüllen, Kontaktdaten eingeben und absenden.
          </div>
          <div className="row links text-center">
            <div className="col-md-8 col-12">
              <div className="row my-4">
                <div className="col-4">
                  <a href="#">Kontakt</a>
                </div>
                <div className="col-4">
                  <a href="#">Impressum</a>
                </div>
                <div className="col-4">
                  <a href="#">Team</a>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-4">
                  <a href="#">Kontakt</a>
                </div>
                <div className="col-4">
                  <a href="#">Impressum</a>
                </div>
                <div className="col-4">
                  <a href="#">Team</a>
                </div>
              </div>
              <div className="copyright">&copy; All Rights reserved 2020</div>
            </div>
          </div>        
        </div>

      </div>

    </div>
  )
}

export default Home
