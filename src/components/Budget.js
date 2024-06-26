import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget =()=>{
    const{dispatch,budget}=useContext(AppContext);
    const [newBudget,setNewBudget]=useState(budget)
    const handleNewBudget=(event)=>{
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return(
        <div className='alert alert-secondary'>
            <span>Budget: CAD </span>
            <input type="number" step="10" value={newBudget} onChange={handleNewBudget}></input>

</div>
    )
}

export default Budget;