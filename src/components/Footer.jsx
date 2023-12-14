import logoLight from '../assets/logo-light.svg';
import fb from '../assets/icon-facebook.svg';
import insta from '../assets/icon-instagram.svg';
import twitter from '../assets/icon-twitter.svg';

import '../scss/stylos/footer.scss';

export const Footer = () => {
  return (
    <section className="footer tablet desktop">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <img src= {logoLight} alt="" />
            </div>
            <p className="footer__paragraph">
            The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </p>

            <div className="footer__icon">
                <img src= {fb} alt="" />
                <img src= {insta} alt="" />
                <img src= {twitter} alt="" />
            </div>
        </div>

    </section>
  )
}
