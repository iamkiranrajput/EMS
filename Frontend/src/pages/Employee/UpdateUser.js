import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './PostUser.css';
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8888/api/employee/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }

    }


    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(`http://localhost:8888/api/employee/${id}`);
                const data = await response.json();
                setFormData(data);
                console.log(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchEmployees();
    }, [id])




    return (
        <>
            <h1 className='text-center'>Update Employee</h1>

            <div className=' d-flex justify-content-center'>
                <form className='border border-2 p-3 d-flex flex-column w-50' onSubmit={handleSubmit} >
                    <Form.Group controlId='FormBasicName ' className='pb-2'>
                        <Form.Control type='text' name='name' placeholder='Enter name' value={formData.name} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2'>
                        <Form.Control type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2'>
                        <Form.Control type='number' name='phone' placeholder='Enter phone' value={formData.phone} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='FormBasicName' className='pb-2'>
                        <Form.Control type='text' name='department' placeholder='Enter Department' value={formData.department} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>

                    <Button varient="primary" type="submit" className="w-100">Edit Employee</Button>
                </form>
            </div>

        </>
    )


}
export default UpdateUser;