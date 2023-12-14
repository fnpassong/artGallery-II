import { Link } from "react-router-dom"
import { Boton } from "../components/Boton"

import leftArrow from '../assets/icon-arrow-left.svg';
import '../scss/stylos/location.scss';
import { Footer } from "../components/Footer";

export const Location = () => {

  const texto = {
    text: 'back to home',

  }

  return (
    <section className="location tablet desktop">

      <div className="location__wrapper">

        <Link to= '/' className="location__btn">
          <img src= {leftArrow} alt="" />
          <Boton texto={texto}/> 
        </Link>

      </div>

      <div className="location__dark">
        <div className="location__wrapperDark container">
          <h2 className="location__title">our location</h2>
          <div className="location__card">
            <h3 className="location__subtitle">99 king street</h3>
            <div className="location__paragraph">
              <div className="location__p">
                <p>Newport</p>
                <p>RI 02840</p>
                <p>United States of America</p>

              </div>
            <p className="location__text">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer/>

    </section>
  )
}
