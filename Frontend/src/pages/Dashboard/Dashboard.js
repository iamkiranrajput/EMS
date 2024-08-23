import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
import Footer from "../Footer";


const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8888/api/employees");
                const data = await response.json();
                console.log(data); // Check the structure of the response data here
                setEmployees(data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchEmployees();
    }, []);

    const handleDelete = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:8888/api/employee/${employeeId}`, {
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

    const handleUpdate = (employeeId) => {
        navigate(`/employee/${employeeId}`);
    }
    return (
        <>
            <div className="flex">
                <Footer />
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-100 m-2">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Department
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Array.isArray(employees) && employees.map((employee) => (
                                    <tr key={employee.id} class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
                                            {employee.name}
                                        </th>
                                        <td class="px-6 py-4">
                                            {employee.email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {employee.phone}
                                        </td>
                                        <td class="px-6 py-4">
                                            {employee.department}
                                        </td>
                                        <td class="px-6 py-4">
                                            <Button variant="outline-secondary" onClick={() => handleUpdate(employee.id)}>Update</Button>
                                            <Button className="ms-2" variant="outline-danger" onClick={() => handleDelete(employee.id)}>Delete</Button>                            </td>
                                    </tr>

                                ))
                            }


                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}
export default Dashboard;
