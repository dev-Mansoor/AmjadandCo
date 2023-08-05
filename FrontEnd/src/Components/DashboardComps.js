import React from 'react'
import ClientContacts from '../Pages/Contact/ClientContacts'
import Boxes from './Boxes'




const DashboardComps = () => {
  return (
    <div>
<div className='lg:flex'>
    <ClientContacts />
    <Boxes />
</div>

    </div>
  )
}

export default DashboardComps