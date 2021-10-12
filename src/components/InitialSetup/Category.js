import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../actions/category.actions';

function Category({code, name, rut}) {

    const dispatch = useDispatch();

    return (
        <div className="Category">
            <span className="categoryCode">{code}</span>
            <span className="categoryName">{name}</span>
            <div className="deleteCategoryContainer">
                <MdDelete className="deleteCategory" onClick={() => {
                    dispatch(deleteCategory(rut, code))
                }}/>
            </div>
        </div>
    )
}

export default Category
