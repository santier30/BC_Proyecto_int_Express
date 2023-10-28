import PrePage from "../prePage/prePage"
import Vintus from "../shop/shopSections/Vintus"
import Wine from "../shop/shopSections/wine"
import { useState,useCallback,useEffect , useRef  } from "react"
import useScroll from "../../Hooks/use-scroll"
const Landing = ()=>{

    const [exclusive,setExclusive] = useState([])
    const [isRuning,setIsRuning] = useState(false)
    const [know,setknow] = useState([])
    const [scrollPositionExclusive, setScrollPositionExclusive] = useState(0);
    const [scrollPositionKnow, setScrollPositionKnow] = useState(0);
    const exclusivasRef = useRef();
    const knowRef = useRef();
    const scrollRef = useRef();
    const animationRef = useRef();
    const [handleScroll]= useScroll(animationRef,setIsRuning,scrollRef);
    const fetchLand =  useCallback(async()=>{
        try {
            const response1 = await fetch("/Vintus/Products/Know")
            const fKnow = await response1.json()
            const response2 = await fetch("/Vintus/Products/Exclusive")
            const fExclusive = await response2.json()
            setExclusive([...fExclusive])
            setknow([...fKnow])
        } catch (error) {
            console.log(error)
        }
        

    },[])

    useEffect(() => {
fetchLand()
    }, [fetchLand])


  
    useEffect(() => {
      function handleWindowResize() {
        console.log(scrollPositionExclusive);
        exclusivasRef.current.scrollLeft = scrollRef.current.clientWidth * scrollPositionExclusive;
        knowRef.current.scrollLeft = scrollRef.current.clientWidth * scrollPositionKnow;
        
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [scrollPositionExclusive,scrollPositionKnow]);

    useEffect(() => {
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);

    return(
        <main >
            <section className="prePage">
            <PrePage title={"Vintus"}/>
            </section>

        <section className="landing">
            <div className="landingSec">



        <h2 className="landTitle">Cosechas exclusivas</h2>

        <button className="button right "disabled={isRuning} ><i className="fa fa-chevron-right" onClick={() => {handleScroll("next",exclusivasRef.current,setScrollPositionExclusive,scrollPositionExclusive)}}></i></button>
        <button className="button left" disabled={isRuning}><i className="fa fa-chevron-left" onClick={() => handleScroll("prev",exclusivasRef.current,setScrollPositionExclusive,scrollPositionExclusive)}></i></button>
            <article className="landingArticles" ref={exclusivasRef}>
                {
                exclusive.map((wine,ind) =>{
                  return(
                    <div className="scroll" key={ind} ref={scrollRef}>
                    <Wine wine={wine} />
                    </div>
                  )
                })
              }
            </article>
            </div>
   </section>

    <section className="landing">
            <div className="landingSec">


            <h2 className="landTitle">Conoce Vintus</h2>
            <button className="button right" disabled={isRuning}><i className="fa fa-chevron-right" onClick={() => handleScroll("next",knowRef.current,setScrollPositionKnow,scrollPositionKnow)}></i></button>
        <button className="button left" disabled={isRuning}><i className="fa fa-chevron-left" onClick={() => handleScroll("prev",knowRef.current,setScrollPositionKnow,scrollPositionKnow)}></i></button>

            <article className="landingArticles" ref={knowRef}>
           
                {
                know.map((wine,ind) =>{
                  return(
                    <div className="scroll" key={ind}>
                    <Wine wine={wine} />
                    </div>
                  )
                })
              }
             
            </article>

                
            </div>
        </section>
       
        <Vintus/>
        </main>
    )
}
export default Landing