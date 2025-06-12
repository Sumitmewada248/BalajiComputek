import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = response.data;
                setUsers(data);
                setFilteredUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredUsers(filtered);
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
            />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>
                                    {item.address.street}, {item.address.city}
                                </td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

export default Search;

