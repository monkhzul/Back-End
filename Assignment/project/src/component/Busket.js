import React from "react";
import "../css/style.css";

function BusketComponent() {
      return (
          <div className="orders text-center mx-2 d-flex flex-column">
            <div className="header">
                <h1>Таны сагс</h1>
                <hr></hr>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores adipisci excepturi, perferendis qui deserunt consequuntur facilis possimus dolore? Et, esse.</p>
            </div>
            <div className="button">
                <button className="btn btn-primary">Захиалах</button>
            </div>
          </div>
      );
}

export default BusketComponent;