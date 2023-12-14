import '../scss/stylos/header.scss';
import { Boton } from './Boton';

import arrow from '../assets/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

export const Header = () => {

  const texto = {

    text: 'Our Location',
  }

  return (
    
    <div className="art">
      <div className="art__wrapper tablet desktop">
        <div className="art__back">
          <div className="art__dark"></div>
          <div className="art__pic"></div>

        </div>

        <div className="art__text container">
          <h1 className='art__title'> modern <span> art gallery </span></h1>

          <p className="art__paragraph">
          The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
          </p>
          <div className="art__btn">
            <Link to='/location'>
              <Boton texto= {texto} />
            </Link>
              <img src={arrow} alt="" />
            
             
           
          </div>
        </div> 

      </div>



    </div>

  )
}
