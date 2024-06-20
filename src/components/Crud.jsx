import { useEffect, useState } from "react";
import './Crud.css';

const Crud = () => {
    const [data, setData] = useState(() => {
        const localData = localStorage.getItem('crudData');
        return localData ? JSON.parse(localData) : [];
    });

    const [inpVal, setInpVal] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [editIndex, setEditIndex] = useState(null);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInpVal({
            ...inpVal,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inpVal.name === "" || inpVal.email === "" || inpVal.password === "") {
            alert("Please fill in all input fields properly.");
            return;
        }
        if (editIndex !== null) {
            const updatedData = [...data];
            updatedData[editIndex] = inpVal;
            setData(updatedData);
            setEditIndex(null);
        } else {
            setData([...data, inpVal]);
        }
        setInpVal({ name: "", email: "", password: "" });
    };

    const handleDelete = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    const handleUpdate = (index) => {
        const originalIndex = sortedList.indexOf(filterList[index])
        setEditIndex(originalIndex);
        setInpVal({
            name:filterList[index].name,
            email: filterList[index].email,
            password:filterList[index].password,

        });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem('crudData', JSON.stringify(data));
    }, [data]);

    const sortedList = sort ? [...data].sort((a, b) => {
        const comparison = a[sort].localeCompare(b[sort]);
        return sortDirection === 'asc' ? comparison : -comparison;
    }) : data;

    const filterList = sortedList.filter((item) => {
        return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) 
        );
    });

    const handleSort = (field) => {
        if (field === sort) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSort(field);
            setSortDirection("asc");
        }
    };

    return (
        <div>
            <h2>CRUD</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={inpVal.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={inpVal.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={inpVal.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <br />
                <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
            </form>
            <input
                type="text"
                placeholder="Search Here"
                onChange={handleSearch}
                value={search}
            />
            <br /><br />

            <div>
                {data.length > 0 ? (
                    <table border={2} cellPadding={2} cellSpacing={2}>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th onClick={() => handleSort('name')}>Name {sort === 'name' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
                                <th onClick={() => handleSort('email')}>Email {sort === 'email' && (sortDirection === 'asc' ? '↓' : '↑')}</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterList.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(index)} className="edit" >Edit</button>
                                        <button onClick={() => handleDelete(index)}className="delete" >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : <p>No data available</p>}
            </div>
        </div>
    );
};

export default Crud;
