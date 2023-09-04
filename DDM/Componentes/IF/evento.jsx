import Palmeiras from "../img/palmeiras_img"
import Gremio from "../img/gremio_img"
import Corinthians from "../img/corinthians_img"


function Evento(props){
       
    const v = props.v

    if(v < 10){
        return(
            
            <Palmeiras />
                        
        )
    }

    if(v >10 && v <50){
        return(

            <Gremio />

        )
    }

    if( v > 50){
        return(

            <Corinthians />
            
            )   
        }         

    }


    



export default Evento
