import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import { MdAdd } from "react-icons/md"

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "clothing",
        new_price: "",
        old_price: "",
    })

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const imagehandler = (e) => {
        setImage(e.target.files[0]);
    }
    const Add_Product = async () => {
        // console.log(productDetails)
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {
            responseData = data
        })
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);

            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{data.success?alert("Product Added"):alert("Upload Failed")})
        }
    }

    return (
        <div className='p-8 box-border bg-white w-full rounded-sm mt-5 lg:ml-5'>
            <div className='mb-3'>
                <h4 className='bold-18 pb-2'>Product title:</h4>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
            </div>
            <div className='mb-3'>
                <h4 className='bold-18 pb-2'>Price:</h4>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
            </div>
            <div className='mb-3'>
                <h4 className='bold-18 pb-2'>Offer Price:</h4>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />
            </div>
            <div className='mb-3 flex items-center gap-x-4'>
                <h4>Product Category:</h4>
                <select value={productDetails.category} onChange={changeHandler} name="category" id="" className='bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none'>
                    <option value="clothing">Clothing</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='w-20 rounded-sm inline-block' />
                </label>
                <input onChange={imagehandler} type="file" name='image' id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4' />
            </div>
            <button onClick={() => { Add_Product() }} className='btn-dark rounded-lg mt-4 flexCenter gap-x-1'>Add Product</button>
        </div>
    )
}

export default AddProduct