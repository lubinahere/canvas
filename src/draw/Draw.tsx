import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'

interface DrawingProps {
    close: () => void;
}

const Drawing = ({close}: DrawingProps) => {
    const [renderRef, draw] = useSvgDrawing();

    const [item, setItem] = React.useState({ name: '' });

    const handleInput = (e: any) => {
        setItem({ ...item, name: e.currentTarget.value });
    }

    const saveNewItem = () => {
        const drawing = {
            name: item.name,
            imageXML: draw.getSvgXML()
        }
        const savedItems = JSON.parse(localStorage.getItem("Drawings") || "[]");

        savedItems.push(drawing);

        localStorage.setItem("Drawings", JSON.stringify(savedItems));

    }




    // Drawing area will be resized to fit the rendering area
    return (<React.Fragment>
        <button onClick={saveNewItem} >Save</button>
        <input onChange={handleInput} value={item.name} type="text" />
        <div style={{ border: "1px solid", margin: "10px", width: "800px", height: "500px" }} ref={renderRef} />
    </React.Fragment>)
}



export default Drawing;
