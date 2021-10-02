import React from 'react'
import {MdDelete} from 'react-icons/md'

function Category({id, code, name}) {
    return (
        <div className="Category">
            <span className="categoryId">{id}</span>
            <span className="categoryCode">{code}</span>
            <span className="categoryName">{name}</span>
            <div className="deleteCategoryContainer">
                <MdDelete className="deleteCategory"/>
            </div>
        </div>
    )
}

export default Category
