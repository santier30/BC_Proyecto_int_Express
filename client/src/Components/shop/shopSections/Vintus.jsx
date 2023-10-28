import vineshard from '../../img/vineyard.jpg'

const Vintus=()=>{
    return(
        <section className="Vintus_background">
        <div className="Vintus">
          <article className="Vintus_img">
            <img src={vineshard} alt=""/>
          </article>
          <article className="Vintus_article">
            <h2>Vintus | Fundada en 1998</h2>
            <p>Situados entre las colinas ondulantes y los viñedos, en Vinoteca Vintus creamos vinos excepcionales que capturan la esencia de nuestro venerado terruño. Con el impresionante telón de fondo del pintoresco paisaje rural, curamos con pasión y nutrimos la misma tierra que ha sido nuestro lugar de nacimiento durante más de dos décadas.

              Explorando el arte de la vinificación, abrazamos cada cosecha como una oportunidad para crear algo extraordinario. Desde el momento en que se recogen las uvas de las vides hasta el cuidadoso proceso de añejamiento, nuestra dedicación a la calidad brilla en cada botella que producimos.
              
              Únete a nosotros en un viaje de sabor y tradición mientras continuamos escribiendo nuestra historia, cosecha tras cosecha. Vinoteca Vintus: Un brindis por la belleza del tiempo, el lugar y los exquisitos sabores que nos definen.
              
              </p>
              <div className="corner_top"></div>
              <div className="corner_botom"></div>
          </article>
          </div>
        </section>
    )
}
export default Vintus