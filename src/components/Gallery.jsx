import '../scss/stylos/gallery.scss';


export const Gallery = () => {
  return (
    <section className="gallery">

        <div className="gallery__wrapper tablet desktop container">

            <div className="gallery__first">
                <div className="gallery__img"></div>
                <div className="gallery__text">
                    <h2 className="gallery__title">
                        Your Day <span>at the Gallery</span> 
                    </h2>
                    <p className="gallery__paragraph">
                        Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                    </p>

                </div>

            </div>

            <div className="gallery__second">
                <div className="gallery__imgBig"></div>

                <div className="gallery__mix">
                    <div className="gallery__imgSmall"></div>
                    <div className="gallery__text--One">
                        <h2 className="gallery__title--One">COME & BE INSPIRED</h2>
                        <p className="gallery__paragraph">
                        We’re excited to welcome you to our gallery and see how our collections influence you.
                        </p>

                    </div>
                </div>

            </div>


        </div>



    </section>
  )
}
