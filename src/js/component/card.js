import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";



// const button = () => {
//     const agregar = () => {

// };
const button = document.getElementById("#agregar")
export const Card = () => {
    const like = () => {
        
}
        return(
    <div className="card">
    <img src="rigo-baby.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      <button href="#" className="btn btn-primary" onClick={like}>❤</button>
    </div>
  </div>)
    };

