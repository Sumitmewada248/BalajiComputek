import React, { useState } from "react";

const Add = ({ onAddUser }) => {
  // Initialize empty form state
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    address: { street: "", city: "" },
    website: "",
    company: { name: "" },
  });

  // Handle form field changes  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "street" || name === "city") {
      setNewUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else if (name === "companyName") {
      setNewUser((prev) => ({
        ...prev,
        company: { name: value },
      }));
    } else {
      setNewUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields are not empty
    if (
      !newUser.name.trim() ||
      !newUser.username.trim() ||
      !newUser.address.street.trim() ||
      !newUser.address.city.trim() ||
      !newUser.website.trim() ||
      !newUser.company.name.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Compose the user object with a temporary id
    const userToAdd = {
      id: Date.now().toString(),
      ...newUser,
    };

    // Call parent callback if provided
    if (typeof onAddUser === "function") {
      onAddUser(userToAdd);
    }

    // Reset form
    setNewUser({
      name: "",
      username: "",
      address: { street: "", city: "" },
      website: "",
      company: { name: "" },
    });
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #f9fafb;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 48px auto;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        h2 {
          margin-bottom: 24px;
          color: #4f46e5;
          text-align: center;
          font-weight: 700;
        }
        form {
          display: grid;
          gap: 16px;
        }
        label {
          font-weight: 600;
          color: #3730a3;
          display: block;
          margin-bottom: 6px;
        }
        input {
          width: 100%;
          padding: 10px 14px;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          transition: border-color 0.3s ease;
        }
        input:focus {
          border-color: #4f46e5;
          outline: none;
          box-shadow: 0 0 6px rgba(79,70,229,0.3);
        }
        button {
          background: #4f46e5;
          color: white;
          font-weight: 700;
          padding: 14px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: background-color 0.3s ease;
        }
        button:hover,
        button:focus {
          background-color: #4338ca;
        }
      `}</style>
      <main className="container" role="main" aria-labelledby="addUserHeading">
        <h2 id="addUserHeading">Add New User</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleInputChange}
              placeholder="johndoe"
              required
            />
          </div>
          <div>
            <label htmlFor="street">Street Address</label>
            <input
              type="text"
              id="street"
              name="street"
              value={newUser.address.street}
              onChange={handleInputChange}
              placeholder="123 Main St"
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={newUser.address.city}
              onChange={handleInputChange}
              placeholder="Los Angeles"
              required
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={newUser.website}
              onChange={handleInputChange}
              placeholder="https://example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={newUser.company.name}
              onChange={handleInputChange}
              placeholder="Example Inc."
              required
            />
          </div>
          <button type="submit" aria-label="Add User">
            Add User
          </button>
        </form>
      </main>
    </>
  );
};

export default Add;

