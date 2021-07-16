import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { IDrawing } from "./Drawings";

interface DrawingProps {
    close: () => void;
    drawing?: IDrawing
}

const Drawing = ({close, drawing}: DrawingProps) => {
    const [renderRef, draw] = useSvgDrawing();

    const [picture, setPicture] = React.useState({ name: '' });

    const handleInput = (e: any) => {
        setPicture({ ...picture, name: e.currentTarget.value });
    }

    const saveNewItem = () => {
        const newDrawing = {
            name: picture.name,
            imageXML: draw.getSvgXML()
        }
        const savedItems = JSON.parse(localStorage.getItem("Drawings") || "[]");

        savedItems.push(newDrawing);

        localStorage.setItem("Drawings", JSON.stringify(savedItems));
        close();
    }




    // Drawing area will be resized to fit the rendering area
    return (<React.Fragment>
        {drawing? <button onClick={close} >Close</button>:<button onClick={saveNewItem} >Save</button>}
        <input onChange={handleInput} value={picture.name} type="text" />
        <div style={{ border: "1px solid", margin: "10px", width: "800px", height: "500px" }} ref={renderRef} />
    </React.Fragment>)
}



export default Drawing;
