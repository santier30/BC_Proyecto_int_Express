
const useError=()=>{
    function makeError (a){
        const messageElements = a.map((message, index) => (
          <span key={index}>
            {message}
            {index < a.length - 1 && <br />}
          </span>
          
        ));
        return messageElements
      }
      return makeError
}
export default useError
