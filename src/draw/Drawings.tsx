import React, { useEffect } from 'react';

interface Drawings {
  name: string;
  imageXML: string;
}

const Drawings = () => {
  const [ pictures, setPictures ] =  React.useState<Drawings[]>([]);

  useEffect( () => { 
  setPictures(JSON.parse(localStorage.getItem("Drawings")||"[]"))
    

   }, []);

  return(
    <React.Fragment>
    <ul>
      {pictures.map(picture => <li>{picture.name}</li>)}
    </ul>
    </React.Fragment>
  )
}



export default Drawings;