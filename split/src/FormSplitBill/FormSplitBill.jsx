import React from 'react';
import './FormSplitBill.css'

const FormSplitBill = () => {
    return (
        <form className='form-split-bill'> 
            <h4>Split Bill With Sarah</h4>
            <label htmlFor="">Bill Value </label>
            <input type="text" name="" id="" />

            <label htmlFor="">Your Expense </label>
            <input type="text" name="" id="" />

            <label htmlFor="">Sarah's Expense </label>
            <input type="text" name="" id="" />
            <label htmlFor="">Who is paying the bill? </label>
            <select name="" id="">
                <option value="user">You</option>
                <option value="user">X</option>
                <option value="user">Y</option>
            </select>

        </form>
    );
};

export default FormSplitBill;