import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProduct() {
    const [product, setProduct] = useState({
        img: "",
        img2: "",
        img3: "",
        img4: "",
        title: "",
        description: "",
        price: "",
        realPrice: "",
        discount: "",
        category: "Cloth Boy's",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASEURL}products/addProducts`, product);

            if (response.status === 200) {
                alert("Product added successfully!");
                setProduct({
                    img: "",
                    img2: "",
                    img3: "",
                    img4: "",
                    title: "",
                    description: "",
                    price: "",
                    realPrice: "",
                    discount: "",
                    category: "Cloth Boy's",
                });
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please try again.");
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="row g-3">
                {["img", "img2", "img3", "img4"].map((field, index) => (
                    <div className="col-md-6" key={index}>
                        <label className="form-label">Image URL {index + 1}:</label>
                        <input
                            type="text"
                            className="form-control"
                            name={field}
                            value={product[field]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <div className="col-md-6">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Description:</label>
                    <textarea className="form-control" name="description" value={product.description} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Price:</label>
                    <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Real Price:</label>
                    <input type="number" className="form-control" name="realPrice" value={product.realPrice} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Discount (%):</label>
                    <input type="number" className="form-control" name="discount" value={product.discount} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Category:</label>
                    <select className="form-select" name="category" value={product.category} onChange={handleChange} required>
                        <option>Cloth Boy's</option>
                        <option>Cloth Girl's</option>
                        <option>Food</option>
                        <option>Accessories</option>
                        <option>Toy's</option>
                    </select>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
