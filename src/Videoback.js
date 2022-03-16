
import Wavesback from "./component/wavesback.mp4";
import "./App.css";

function Videoback(){
return (
       <video id= "background_video" autoPlay muted loop>
           <source src={Wavesback} type="video/mp4"/>
       </video>
    
);
}
export default Videoback;