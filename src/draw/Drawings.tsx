 import React, { useEffect } from 'react';
import Drawing from './Draw';

export interface IDrawing {
  name: string;
  imageXML: string;
}

const Drawings = () => {
  const [pictures, setPictures] = React.useState<IDrawing[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<IDrawing>();

  useEffect(() => {
    setPictures(JSON.parse(localStorage.getItem("Drawings") || "[]"))


  }, []);

  const itemClickHanlder = (e: any) => {
    setSelectedItem(pictures[e.target.value]);
  }

  return (
    <React.Fragment>
      {selectedItem ? <Drawing close={() => setSelectedItem(undefined)} drawing={selectedItem} /> 
      : 
      <ul>
        {pictures.map((picture, idx) => <li><button onClick={itemClickHanlder} value={idx} >{picture.name}</button></li>)}
      </ul>
      }
    </React.Fragment>
  )
}



export default Drawings;