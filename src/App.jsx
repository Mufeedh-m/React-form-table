import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [edittext, setEditText] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edittext!==null) {
      const updated = [...data]
      updated[edittext] = { name, email }
      setData(updated)
      setEditText(null)
    }
    else {
      setData([...data, { name, email }])
    }
    setName('')
    setEmail('')

    
    }
    const handleEdit=(index)=>{
    setName(data[index].name)
    setEmail(data[index].email)
    setEditText(index)


  }
  const handleDelete=(index)=>{
    setData(data.filter((_,i)=>i!==index))
  }


  return (
    <>
      <div>
        <h1 className='border mb-4 font-bold text-2xl bg-amber-500 text-white rounded-2xl'>Form Table</h1>
        <form onSubmit={handleSubmit}
          className='border px-6 py-2 bg-amber-200 rounded-2xl mb-10'>
          <input type="text" placeholder='Name' className='border mr-4 mt-5 mb-5 pl-2 rounded-lg py-1'
            value={name}
            onChange={(e) => setName(e.target.value)

            } />
          <input type="text" placeholder='Email' className='border pl-2 rounded-lg py-1'
            value={email}
            onChange={(e) => setEmail(e.target.value)} /><br />
          <button className='bg-blue-500 px-6 py-2 rounded-2xl font-bold text-white'>Add</button>
        </form>
        <table className='border min-w-full'>
          <thead >
            <tr>
              <th className='border px-10 py-2 bg-gray-300 text-xl'>Name</th>
              <th className='border px-10 py-2 bg-gray-300 text-xl'>E-mail</th>
              <th className='border px-10 py-2 bg-gray-300 text-xl'>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={index}>
                 <td className='border'>{item.name}</td>
                 <td className='border'>{item.email}</td>
                 <td className='border'>
                  <button onClick={() =>handleEdit(index)}
                  className='bg-green-500 px-4 py-1 mt-2 mb-2 mr-2 rounded-lg text-white'>Edit</button>
                  <button onClick={() =>handleDelete(index)}
                  className='bg-red-500 px-4 py-1 rounded-lg text-white'>Delete</button>
                 </td>
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
