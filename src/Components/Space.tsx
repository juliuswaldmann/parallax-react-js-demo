import Planet from '../Planets/Planet';
import Planet1 from '../Planets/assets/Planet1.png';
import Planet2 from '../Planets/assets/Planet2.png';
import Planet3 from '../Planets/assets/Planet3.png';
import Planet4 from '../Planets/assets/Planet4.png';
import Planet5 from '../Planets/assets/Planet5.png';
import Planet6 from '../Planets/assets/Planet6.png';
import './Space.scss';
import Star from './Star';

function Space() {
    return (

        <div className="Space">
            
            <Stargenerator count={20} ></Stargenerator>
            

            <Planet PlanetImg={Planet1} size="15vw" PlanetSpeed="72%" className={"planet1"}></Planet>
            <Planet PlanetImg={Planet2} size="12vw" PlanetSpeed="80%" className={"planet2"}></Planet>
            <Planet PlanetImg={Planet3} size="10vw" PlanetSpeed="75%" className={"planet3"}></Planet>
            <Planet PlanetImg={Planet4} size="13vw" PlanetSpeed="66%" className={"planet4"}></Planet>
            <Planet PlanetImg={Planet5} size="9vw" PlanetSpeed="92%" className={"planet5"}></Planet>
            <Planet PlanetImg={Planet6} size="25vw" PlanetSpeed="110%" className={"planet6"}></Planet>

        </div>

    );
}

export default Space;

function Stargenerator(props: {count: number}) {
      
    var outarray = [];

    for (var i = 0; i < props.count; i++){
        outarray.push(<Star StarSpeed="10%" position={{top: getRandomInt(5, 100) + "vh", left: getRandomInt(1, 99) + "vw"}} zIndex={-1} key={"key" + i}></Star>)
    }

    return (

        <>
         {outarray}
        </>

    );

  }

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}