/* eslint-disable no-unused-vars */
import React from 'react'
import './Add.css'
import { assets,url } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Add = () => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubHandler = async () => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.sccess) {
                setData({
                        name: "",
                description: "",
                price: "",
                category: "Salad"
                    })
                    setImage(false)
                    toast.success("Added Successfully!!👍")
                }else{
                    toast.error(response.data.message)
                }
                // try {
                //     const response = await axios.post('http://localhost:3000/api/food/add',formData);
                //     console.log(response.data);
                //     toast.success("finallyy..")
                // } catch (error) {
                //     if (error.response) {
                //         // Server responded with a status other than 200 range 
                //         console.error('Server Error:', error.response.status);
                //     } else if (error.request) {
                //         // Request was made but no response received 
                //         console.error('Network Error:', error.message);
                //     } else { // Something else happened 
                //         console.error('Error:', error.message);
                //     }
                // }
            }

return (
    <div className='add'>
        <form className="flex-col" onSubmit={onSubHandler} >
            <div className="img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />
            </div>
            <div className="product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} type="text" name="description" rows='6' placeholder='Write here..' ></textarea>
            </div>
            <div className="category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category" id="">
                        <option defaultValue="Salad" value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Dabeli">Dabeli</option>
                        <option value="Manchurian">Manchurian</option>
                        <option value="Tacos">Tacos</option>
                        <option value="Snacks">Snacks</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="" placeholder='₹₹' />
                </div>
            </div>
            <button type='submit' className='add-btn' >ADD</button>
        </form>

    </div>
)
}

export default Add
