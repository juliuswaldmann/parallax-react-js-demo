import {ParallaxLayer} from 'parallax-react-js';
import './Planet.scss';

function Planet(props: { PlanetImg: any; size: string; PlanetSpeed: string, className?: string}) {
    return (

        <ParallaxLayer speed={props.PlanetSpeed}>
            <img className={props.className + " Planet"} alt="Planet" src={props.PlanetImg} style={{width: props.size, height: props.size, borderRadius: "50%"}}></img>
        </ParallaxLayer>

    );
}

export default Planet;