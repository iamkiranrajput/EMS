import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './PostUser.css';
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../Navigation";

const UpdateUser2 = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [id2, setId2] = useState(1);
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
            const response = await fetch(`http://localhost:8888/api/employee/${id2}`, {
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

    const handleIDSubmit = async (e) => {
        e.preventDefault();

        navigate(`/employee/${id2}`);
    }


    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch(`http://localhost:8888/api/employee/${id2}`);
                const data = await response.json();
                setFormData(data);
                console.log(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchEmployees();
    }, [id2])




    return (
        <>
            <form className='  p-3 flex flex-column justify-center items-center w-full' onSubmit={handleIDSubmit} >

                <Form.Group controlId='FormBasicName ' className='pb-2 w-50'>
                    <Form.Control type='number' name='id2' placeholder='Enter ID' value={id2} onChange={(e) => setId2(e.target.value)} ></Form.Control>
                </Form.Group>
                <Button varient="primary" type="submit" className="w-50">Submit Employee ID</Button>


            </form>



        </>
    )


}
export default UpdateUser2;