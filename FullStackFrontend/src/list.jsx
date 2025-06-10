

import {useState,useEffect} from 'react';
import axios from 'axios';

const List = () => {

   const [data, setData] = useState([]);

useEffect(() => {
  axios.get("http://localhost:7000/api/get")
    .then(res => {
      console.log("Fetched data:", res.data);
      setData(res.data);
    })
    .catch(err => console.log("Fetch error:", err));
}, []);
   


  return (
    <>
    
 {data && data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Password</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.password}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4">No data available</p>
      )}
    </>
  );
};

export default List;