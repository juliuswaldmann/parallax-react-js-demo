import { ParallaxLayer } from "parallax-react-js";
import React from "react";
import { useEffect } from "react";
import './Star.scss';

function Star (props: { StarSpeed: string; StarSize?: string; position?: {top?:string, bottom?:string, left?:string, right?:string}; zIndex?: number}) {
    
    const thisdiv = React.createRef<HTMLDivElement>();
    
    useEffect(()=>{

        var interval = setInterval(function(){
            
            setTimeout(function(){
                try {
                    thisdiv.current!.style.backgroundColor = "rgba(255, 255, 255, " + (getRandomInt(60, 100)/100) + ")";
                } catch (error) {
                    console.error(error);
                }

            }, (getRandomInt(0, 400)))
        }, 1000)
        
        return () => {
            clearInterval(interval);
        }

    }, [thisdiv])

    return (
        <ParallaxLayer speed={props.StarSpeed} zIndex={1}>
            <div className="Star" ref={thisdiv} style={{backgroundColor: "rgba(255, 255, 255, " + 0.7 + ")", 
            top: props.position?.top, bottom: props.position?.bottom, left: props.position?.left, right: props.position?.right, zIndex: props.zIndex}}>

            </div>
        </ParallaxLayer>
    )
}

function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export default Star;