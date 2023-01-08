import { useState } from "react"


const counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={()=>setCount(count+1)} >Inc</button>
    </div>
  )
}

export default counter