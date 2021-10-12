import React from 'react'
import {MdCancel} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteRole } from '../../actions/role.actions'


function RoleTag({name, color, id, rut}) {

    const dispatch = useDispatch();

    return (
        <div className="RoleTag" style={{backgroundColor:`${color}`}}>
            {name} 
            <MdCancel className="deleteRole" onClick={()=>{
                dispatch(deleteRole(rut, id))
            }}/>
        </div>
    )
}

export default RoleTag
