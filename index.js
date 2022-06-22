import {useEffect, useState} from 'react';
import "./styles.css";

export default function App() {

  
  const useWindowWidth = () =>{
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(()=>{
      
      const windowResize = () =>{
        setWindowWidth(window.innerWidth);
      };
      
      if (window !== undefined){
        window.addEventListener("resize", windowResize);
        windowResize()
        return () =>{
          window.removeEventListener('resize', windowResize);
        }
      }
    },[])
    return windowWidth;
  }

  console.log(useWindowWidth());
  

  return (
    <div className="App"></div>
  );
}
