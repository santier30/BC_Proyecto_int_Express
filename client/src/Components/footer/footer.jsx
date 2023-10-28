import logo from "../img/logoRBack-removebg-preview.png"
import facebook from "../img/facebook.png"
import facebook2 from "../img/facebook2.png"
import x from "../img/twitter.png"
import x2 from "../img/twitter2.png"
import instagram from "../img/instagram.png"
import instagram2 from "../img/instagram2.png"
import tiktok from "../img/tiktok.png"
import tiktok2 from "../img/tiktok2.png"
import youtube from "../img/youtube.png"
import youtube2 from "../img/youtube2.png"
import whatsapp from "../img/whatsapp.png"
import whatsapp2 from "../img/whatsapp2.png"
import {Link} from 'react-router-dom';
const Footer = ()=>{


return(
    <footer className="footer">
    <section className="footer_section">
      <article className="footer_copy">
        <img src={logo} alt=""/> 
        <div><p>Prohibida la reproducción total o parcial de imágenes y textos.</p>
        <Link to="/SobreNosotros">Sobre Nosotros</Link></div>
      </article>
      <article className="footer_links">
        <a href="https://facebook.com" className="facebook">
          <img src={facebook} alt="" className="footer_img"/>
          <img src={facebook2} alt="" className="footer_img2"/>
      </a>
      <a href="https://twitter.com" className="twitter">
          <img src={x} alt="" className="footer_img"/>
          <img src={x2} alt="" className="footer_img2"/>
      </a>
      <a href="https://instagram.com" className="instagram">
          <img src={instagram} alt="" className="footer_img"/>
          <img src={instagram2} alt="" className="footer_img2"/>
      </a>
      <a href="https://tiktok.com" className="tiktok">
          <img src={tiktok} alt="" className="footer_img"/>
          <img src={tiktok2} alt="" className="footer_img2"/>
      </a>
      <a href="https://youtube.com" className="youtube">
          <img src={youtube} alt="" className="footer_img"/>
          <img src={youtube2} alt="" className="footer_img2"/>
      </a>
      <a href="https://whatsapp.com" className="whatsapp">
          <img src={whatsapp} alt="" className="footer_img"/>
          <img src={whatsapp2} alt="" className="footer_img2"/>
      </a>
      </article>
    </section>

  </footer>
)






};
export default Footer;