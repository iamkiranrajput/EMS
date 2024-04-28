import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
const Dashboard = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8188/api/employees");
                const data = await response.json();
                setEmployees(data);
            } catch (err) {
                console.error(err.message);
            }
        }
        fetchEmployees();
    }, []);


    const handleDelete = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:8188/api/employee/${employeeId}`, {
                method: "Delete",
            });

            if (response.ok) {
                setEmployees((prevEmployee) => (prevEmployee.filter((employee) => employee.id !== employeeId)))
            }

            console.log(`Employee with id ${employeeId} deleted successfully`);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <Container className="mt-5">

                <Row>
                    <Col>
                        <h1 className="text-center"> Employees Details</h1>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((employee) => (
                                        <tr key={employee.id} className="text-center">
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.department}</td>
                                            <td>
                                                <Button variant="outline-secondary">Update</Button>
                                                <Button className="ms-2" variant="outline-danger" onClick={() => handleDelete(employee.id)}>Delete</Button>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>


            </Container>
        </>
    )
}
export default Dashboard;
