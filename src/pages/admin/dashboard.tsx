

import AdminCard from '@/components/Admin/Card/AdminCard'
import React from 'react'

function dashboard() {
  let card = [{
    titolo : '',
    img : '',
  },{
    titolo : '',
    img : '',
  },
  {
    titolo : '',
    img : '',
  },
 
]
  return (
   <>
   <p></p>
   <div className=" flex-row block row-end-6">
    {
      card.map((card) => {
        return (
        <>
        <AdminCard key={card.titolo}/>
        </>
       )})
    }
    </div>
   </>
  )
}

export default dashboard