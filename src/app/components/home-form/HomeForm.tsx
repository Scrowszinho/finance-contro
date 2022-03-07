import React from 'react';
import './HomeForm.scss';

export default function HomeForm() {
    return (
        <div className='form-container'>
            <input type="text" name="" id="" />
            <input type="number" name="" id="" />
            <div>
                <input type="date" name="" id="" />
                <select id="cars" name="cars">
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                </select>
            </div>
        </div>
    )
}