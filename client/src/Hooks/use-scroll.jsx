
const useScroll = (animationRef,setIsRuning,scrollRef)=>{
    const animateScroll = (start, end,container) => {
        const duration = 150; // Adjust the animation duration as needed
        const startTime = performance.now();
       
    
        function step(timestamp) {
          const progress = (timestamp - startTime) / duration;
          if (progress < 1) {
            const newPosition = start + (end - start) * progress;
            container.scrollLeft = newPosition;
            animationRef.current = requestAnimationFrame(step);
          } else {
            container.scrollLeft = end;
           
              setIsRuning(false);
           
          }
        }
    
        animationRef.current = requestAnimationFrame(step);
      };
    
      const handleScroll = (direction , container,setScrollPosition, scrollPosition) => {
        const scrollStep = scrollRef.current.clientWidth; 
        const value = container.scrollLeft;
        
    
        if (container) {
          setIsRuning(true);
          if (direction === "prev") {
            if(value !== 0){
              setScrollPosition(()=>scrollPosition- 1);
              container.scrollLeft -= scrollStep ;
              animateScroll(value,container.scrollLeft,container)
            }else{
              setScrollPosition(9);
              container.scrollLeft = scrollStep * 9 ;
              animateScroll(value,container.scrollLeft,container)
  
            }
            
  
            
          } else if (direction === "next") {
            container.scrollLeft += scrollStep;
            if(container.scrollLeft!==value){
              setScrollPosition(()=>scrollPosition+ 1);
              animateScroll(value,container.scrollLeft,container)
  
            }else{
              setScrollPosition(0);
              container.scrollLeft = scrollStep * 0 ;
              animateScroll(value,container.scrollLeft,container)
  
            }
            
            
  
          }
        }
        
      };

        return[handleScroll];
    }
    export default useScroll;