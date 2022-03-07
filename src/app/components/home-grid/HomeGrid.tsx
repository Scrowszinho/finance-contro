import React from 'react';
import { FaPen, FaTrash } from 'react-icons/all';
import './HomeGrid.scss';

export default function HomeGrid({ data }: any) {
    return (
        <table className='home-grid'>
            <thead>
                <tr>
                    <th>Ações</th>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button className='grid-actions'><FaPen className='mr-1'/></button>
                        <button className='grid-actions'><FaTrash /></button>
                    </td>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>Teste</td>
                </tr>
            </tbody>
        </table>
    );
}