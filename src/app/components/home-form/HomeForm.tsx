import React from 'react';
import './HomeForm.scss';
import { MdOutlineAttachMoney, AiFillFile } from 'react-icons/all';

export default function HomeForm() {
    return (
        <div className='form-container'>
            <div className='d-flex'>
                <div className='styled-input mr-3'>
                <AiFillFile />
                <input type="text" name="" id="" placeholder='Descrição' />
                </div>
                <div className='styled-input'>
                    <MdOutlineAttachMoney />
                   
                    <input type="number" name="" id="" placeholder='Valor' />
                </div>
            </div>
            <div className='form-date-type'>
                <input type="date" name="" id="" className='mr-2' />
                <select id="type" name="type"  className='mr-2'>
                    <option value="CREDIT">Crédito</option>
                    <option value="DEBIT">Débito</option>
                    <option value="INVESTIMENTS">Investimentos</option>
                </select>
                <select id="type" name="type">
                    <option value="CREDIT">Crédito</option>
                    <option value="DEBIT">Débito</option>
                    <option value="INVESTIMENTS">Investimentos</option>
                </select>
            </div>
        </div>
    )
}