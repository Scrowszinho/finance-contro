import React, { useState } from 'react';
import './HomeForm.scss';
import { MdOutlineAttachMoney, AiFillFile, FaSave } from 'react-icons/all';
import { StatusEnum } from '../../enums/status';

export default function HomeForm() {
    const [data, setData]: any = useState({
        desc: '',
        ammount: null,
        date: '',
        type: 'CREDIT',
    });

    return (
        <form>
            <div className='form-container'>
                <div className='d-flex'>
                    <div className='styled-input mr-3'>
                        <AiFillFile />
                        <input
                            value={data.desc}
                            onChange={e => setData({ ...data, desc: e.target.value })}
                            type="text" name=""
                            id="" placeholder='Descrição' />

                    </div>
                    <div className='styled-input'>
                        <MdOutlineAttachMoney />
                        <input type="number"
                            value={data.ammount}
                            onChange={e => setData({ ...data, ammount: e.target.value })}
                            name="" id="" placeholder='Valor' />

                    </div>
                </div>
                <div className='form-date-type'>
                    <input type="date" name=""
                        value={data.date}
                        onChange={e => setData({ ...data, date: e.target.value })}
                        id="" className='input-date mr-2' />

                    <select id="type"
                        value={data.type}
                        onChange={e => setData({ ...data, type: e.target.value })}
                        name="type" className='input-select mr-2'>
                        <option value={StatusEnum.CREDIT}>Crédito</option>
                        <option value={StatusEnum.DEBIT}>Débito</option>
                        <option value={StatusEnum.INVESTIMENTS}>Investimentos</option>
                    </select>
                </div>
                {data.type == StatusEnum.DEBIT &&
                    <div className='other-options-box'>

                    </div>
                }
            </div>
            <div className="bottom-bar">
                <button className='rounded-button confirm-button'>
                    <FaSave className='mr-1' size={18} /> 
                    <span>Confirmar</span>
                </button>
            </div>
        </form>
    );
}