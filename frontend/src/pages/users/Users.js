import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllUsers } from "../../util/APIUtils";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        toast("Oops! Something went wrong.", { type: "error" });
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="home-container  bg-gray-400">
        <div className="container">
          <div className="relative overflow-x-auto rounded-lg">
            <div className="flex justify-end mb-4">
              <input
                  type="text"
                  placeholder="Search by user name"
                  className="w-64 px-3 py-2 border border-gray-300 rounded-md"
                  value={searchQuery}
                  onChange={handleSearch}
              />
            </div>
            <table className="w-full text-sm text-left text-gray-200 dark:text-gray-200">
              <thead className="text-xs text-gray-300 uppercase bg-orange-800 dark:bg-gray-800 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3 bg-black">
                  User name
                </th>
                <th scope="col" className="px-6 py-3 bg-black">
                  Email
                </th>
              </tr>
              </thead>
              <tbody>
              {filteredUsers.map(user => (
                  <tr
                      key={user.id}
                      className="bg-orange-700 border-b dark:bg-gray-700 dark:border-gray-600"
                  >
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black bg-white"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black bg-white">{user.email}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Users;
