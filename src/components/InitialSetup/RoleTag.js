import React from 'react'
import {MdCancel} from 'react-icons/md'

function RoleTag({name, color, id, deleteRole}) {
    return (
        <div className="RoleTag" style={{backgroundColor:`${color}`}}>
            {name} 
            <MdCancel className="deleteRole" onClick={()=>{
                deleteRole(id)
            }}/>
        </div>
    )
}

export default RoleTag
