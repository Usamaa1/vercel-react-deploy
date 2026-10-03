import axios from 'axios';
import React, { useState } from 'react'

const ImageUploadComponent =  () => {


    const [img, setImg] = useState();

    console.log(img);

    const addImage =async (e) => {
        e.preventDefault();

        const myForm = new FormData();


        myForm.append('image', img)

        console.log(myForm.get('image'));


        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/imageUpload",myForm, {
                    headers: {
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

    }







    return (
        <div>
            <h1 className='text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center'>Image Upload</h1>
            <form className="max-w-sm mx-auto">

                <div className="mb-5">
                    <label className="block mb-2.5 text-sm font-medium text-heading">Product Image</label>
                    <input type="file" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" onChange={(e) => setImg(e.target.files[0])} required />
                </div>

                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={addImage}>Add Image</button>
            </form>

        </div>
    )
}

export default ImageUploadComponent