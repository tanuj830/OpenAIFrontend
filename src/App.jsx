import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [info, setInfo] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(info)
    axios.post("https://openaigeneratepic.onrender.com/create", info).then(res=>console.log(res.data)).catch(err=>console.log(err))
  }


  const handleChange = (e) =>{

    const value = e.target.value
    const name = e.target.name

    setInfo({...info, [name]: value})
  }

  return (
    <div className="bg-slate-200">
      <h2 className='text-red-300'>Generate Picture by writing discription only</h2>
      <form action="post" onSubmit={handleSubmit}>
        <input onChange={handleChange} name='prompt' type="text" placeholder='enter disp' />
        <select name="size" id="" onChange={handleChange}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
