import React from 'react'

function Todo({val, setVal, handleRemove, todo}) {
  return (
    <>
   {val.map((item, index)=>{
    return <div key={index} className='flex items-center justify-between border rounded  px-5 py-4  m-3'>
       <h1 className='text-black text-2xl'>{index}. {item.todo}</h1>
       <button onClick={()=>handleRemove(index)} className='py-1 px-2 bg-red-400 rounded text-2xl'>Remove</button>
    </div>
   })}
    </>
  )
}

export default Todo
