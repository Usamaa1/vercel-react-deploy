import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from '../../API/Api';

export const ViewProduct = () => {


  const [isProducts, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await Api.get('/viewProduct');
      console.log(response.data);

      setProducts(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Request completed");
    }
  };


  useEffect(() => {
    getProducts();
  }, [])



  return (
    <div>
      {isProducts.map(({_id,prodName, prodPrice, prodDesc, prodImage, prodRating},i) => (

        <div key={i} className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
          <a href="#">
            <img className="rounded-t-base" src={prodImage} alt="" />
          </a>
          <div className="p-6 text-center">
            <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">

              {prodRating}
            </span>
            <a href="#">
              <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{prodName}</h5>
            </a>
          <p className="mb-6 text-body">{prodDesc}</p>
          <p className="mb-6 text-body">{prodPrice}</p>
          </div>
        </div>

      ))}



    </div>
  )
}
