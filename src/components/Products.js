import React from "react";
import { Wrapper } from "../style-models/Products";
import { Product } from "./Product";

export const Products = ({ data, cols}) => {
  
  return (
    <Wrapper className='knives'>
      <div className='container-fluid'>
        <div className='products-wrapper' style={{gridTemplateColumns: `repeat(${cols}, 300px)`}}>
          {data.map((product) => (
            <Product {...product} key={product._id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
