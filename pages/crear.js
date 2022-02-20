import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Crear = () => {
  const router = useRouter()
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://next-api-mongo.vercel.app/api/user', user)
    .then(resp => {
      console.log(resp.data)
      router.push('/');
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <form className=" rounded px-8 pt-6 pb-8 mb-4 w-8/12 mx-auto" onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">usuario</label>
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="nombre"
          onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">password</label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          name="password"
          onChange={handleChange}/>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="email" 
          name="email"
          onChange={handleChange}/>
        </div>

        <div className="flex items-center justify-between mt-5">
          <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit">
            Sign In
          </button>
        </div>

    </form>
  )
}

export default Crear