import { useEffect, useRef } from "react";

export function useOutsideClick(handler , listenCapturing = true  ) {
    const ref = useRef();
    useEffect(function () {
      function handleClick(e) {
        if(ref.current &&  !ref.current.contains(e.target)){
            handler()
        } 
      }
      addEventListener("click", handleClick , listenCapturing);
  
      return () => removeEventListener("click", handleClick , listenCapturing);
    }, [handler ,listenCapturing]);
  
    return ref
}
