import React from 'react'
import { useState } from 'react';
import { truncateString } from '../utils';


const ProductCard = ({id, title, category, glass, desc, instruction, image}) => {
    const [fullString, setFullString]=useState(false);
  return (
    <main>
      <div
        style={{
          padding: "2rem 0",
          width: "90%",
          margin: "auto",
          borderRadius: "5px",
          backgroundColor: "burlywood",
          boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ width: "20rem", height: "20rem", margin: "auto" }}>
          <img src={image} Width="100%" height="100%" alt="" />
        </div>
        <div style={{ padding: "0 1rem" }}>
          <h2>{title}</h2>
          <p style={{fontSize: "1.2rem"}}>{category}</p>
          <p>{glass}</p>
          <p>
            {fullString === false ? truncateString(instruction) : instruction}
          </p>
        </div>
        <button
          style={{ margin: "0 1rem" }}
          onClick={() => setFullString(!fullString)}
        >
          {fullString == false ? "See more" : "See less"}
        </button>
      </div>
    </main>
  );
}

export default ProductCard