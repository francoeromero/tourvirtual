import React from "react";
import { Pannellum } from "pannellum-react";
import image from '../images/cee_360.jpg'

export default function Scene() {
    return (
        <>
            <Pannellum
                width='100%'
                height='100vh'
                image={image}
                pitch={10}
                yaw = {180}
                hfov = {110}
                autoLoad
            >
            </Pannellum>
        </>
    );
}