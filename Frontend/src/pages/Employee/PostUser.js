import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './PostUser.css';
import { useNavigate } from "react-router-dom";
import Navigation from '../Navigation';

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }



    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response = await fetch("http://localhost:8888/api/employee", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log("Employee Created : ", data);
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <div className='flex'>
                <Navigation />
                <form className='w-full p-3 d-flex flex-column justify-center items-center ' onSubmit={handleSubmit} >
                    <Form.Group controlId='FormBasicName ' className='pb-2 w-50'>
                        <Form.Control type='text' name='name' placeholder='Enter name' value={formData.name} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2 w-50'>
                        <Form.Control type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2 w-50'>
                        <Form.Control type='number' name='phone' placeholder='Enter phone' value={formData.phone} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2 w-50'>
                        <Form.Control type='text' name='department' placeholder='Enter Department' value={formData.department} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Button varient="primary" type="submit" className="w-50">submit</Button>

                </form>

            </div>
        </>
    )
}
export default PostUser;
