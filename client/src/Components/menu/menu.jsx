import { Link , useLocation} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import logo from "../img/logoRBack-removebg-preview.png"


function Menu(props) {
  const [active,setActive] = useState({Tienda:"active"})
  const [open,setOpen] = useState({hamburger:null,menu:null,link:null})

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const pageName = currentPath.split('/').filter(Boolean)[0];
    setActive({ [pageName]: "active" });
  }, [currentPath]);


  const setHamburgerStatus = () =>{

      setOpen(()=>open.link===null?{hamburger:"open",menu:"show",link:"apere"}:{hamburger:null,menu:null,link:null})


  }

    return (
        <header className="nav">
       <h1> <Link to="/" className="logo"><img src={logo}  alt=""></img>Vintus</Link></h1>
          <nav className="nav_navbar">
            <div className={"nav_hamburger "+open.hamburger} onClick={setHamburgerStatus}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <menu className={"nav_menu "+open.menu}>
            <li className={"nav_li "+open.link}><Link to="/Tienda" className={"nav_Link "+active.Tienda}  >Tienda</Link> </li>
            <li className={"nav_li "+open.link}><Link to="/Alta" className={"nav_Link "+active.Alta}  >Alta</Link></li>
            <li className={"nav_li "+open.link}><Link to="/Contactos" className={"nav_Link "+active.Contactos}  >Contactos</Link></li>
            <li className={"nav_li "+open.link}><Link to="/SobreNosotros" className={"nav_Link "+active.SobreNosotros}  >Sobre Nosotros</Link></li>
            <li className={"nav_li "+open.link}><button className="nav_Link" id={"nav_Link "} onMouseEnter={()=>props.setDisplayState()} onMouseLeave={props.setDisplayState}>Carrito</button></li>
          </menu>
          </nav>
        </header>
    );
  }
  
  export default Menu;