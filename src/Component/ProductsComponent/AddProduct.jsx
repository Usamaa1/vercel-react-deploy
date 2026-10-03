import React, { useState } from 'react'
import axios from 'axios';

export const AddProduct = () => {



  const [isProductData, setProductData] = useState({});



  const createProduct = async (e) => {
    e.preventDefault();

    console.log(isProductData)

    const prodForm = new FormData();
    prodForm.append('prodName',isProductData.prodName)
    prodForm.append('prodPrice',isProductData.prodPrice)
    prodForm.append('prodDesc',isProductData.prodDesc)
    prodForm.append('prodRating',isProductData.prodRating)
    prodForm.append('image',isProductData.prodImage)



  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/addProduct",prodForm,
      {
       headers:{
        "Content-Type":"multipart/form-data"
       }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Request completed");
  }
};


  return (
    <div>

      <h1  className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">Add Product</h1>

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">Product Name</label>
          <input type="text"  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" onChange={(e)=>setProductData({...isProductData, prodName: e.target.value})} required />
        </div>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">Product Price</label>
          <input type="text" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  onChange={(e)=>setProductData({...isProductData, prodPrice: e.target.value})} required />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">Product Rating</label>
          <input type="text" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  onChange={(e)=>setProductData({...isProductData, prodRating: e.target.value})} required />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">Product Description</label>
          <textarea type="text" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  onChange={(e)=>setProductData({...isProductData, prodDesc: e.target.value})} required />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">Product Image</label>
          <input type="file" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  onChange={(e)=>setProductData({...isProductData, prodImage: e.target.files[0]})} required />
        </div>
       
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={createProduct}>Add Product</button>
      </form>

    </div>

  )
}
