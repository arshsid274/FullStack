
import axios from 'axios'
import List from './list'
import { useState } from 'react';
const App = () => {

  const sendData = () => {
    axios.post('http://localhost:7000/api/create',formData)
    .then(res => {
      console.log("Response", res.data);
      // Optionally clear inputs after submit
        setFormData({ name: '', email: '', password: '' });
    })
    .catch(err => console.log("Error:", err));
   
 };
   const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
  const [formData,setFormData] = useState({
     name:'',
     email:'', 
     password:''
    });
    //   axios.post('http://localhost:7000/api/create', {
    //   name: 'Arsh',
    //   email: 'arsh@gmail.com',
    //   password: '123456',
    // })
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err));


  return (
    <>
    <div >
      <h1 className="text-center text-3xl">Crud App </h1>
      <div className="flex gap-4 items-center justify-center text-2xl">
       
        <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} 
 />
        <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange}  />
        <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange}  />
        



      </div>
      <div className="flex items-center justify-center">
 <button className=" bg-red-500 px-4 py-2 my-3" onClick={sendData}>Submit</button>
      </div>

      <div className='flex items-center justify-center'>
       <List/>
      </div>
     
 
    </div>
   
     
    </>
  )
}

export default App
