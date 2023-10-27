import React from 'react'
import tours from "./Array";
function ArrayTour() {
  return (
    <div className="mmm">
      {tours.map((item) => (
        <div key={item.id}>
          <div className='dashdata'>
            <p>{item.Destination}</p>
            <p>{item.Amount}</p>
            <p>{item.People}</p>
            <button>{item.Edit}</button>
            <button>{item.Delete}</button>
          </div>
        </div>



      ))}
    </div>



  );
}

export default ArrayTour