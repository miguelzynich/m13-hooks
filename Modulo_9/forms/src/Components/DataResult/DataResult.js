import React from "react";
import './DataResult.css'
import { useEqual } from '../Hooks/useEqual'

const DataResult = ({userData, setUserData}) => {

    const handleRemove = (id) => {
        const updatedUserData = userData.filter((value)=> value.id !== id) //tentei usar splice porém estava atualizando a hora junto
        setUserData(updatedUserData)
    }

    const handleSortEarliest = () => {
        const sortedList = userData.sort((a,b) => {
            return a.id - b.id
        })
        setUserData([...sortedList])
    }

    const handleSortLatest = () => {
        const sortedList = userData.sort((a,b) => {
            return b.id - a.id
        })
        setUserData([...sortedList])
    }

    return (
        <div id="data-result">
            <div className="sort-buttons">
                <h2>Organizar por: </h2>
                <button id="latest" onClick={handleSortLatest}>Mais recente</button>
                <button id="earliest" onClick={handleSortEarliest}>Mais antigo</button>
            </div>
            {userData.map((value)=> (
                <div className="data" key={value.id} >
                    <h3 className="name">Nome: {value.name}</h3>
                    <p className="email">Email: {value.email}</p>
                    <p className="password-cpf">{value.cpf === undefined? 'Senha:' + value.password : 'CPF:' + value.cpf}</p>
                    <p className="product">{value.product === undefined? '' : 'Produto: ' + value.product}</p>
                    <h4>Enviado em: {value.date}</h4> 
                    <button className="removeData" onClick={() => handleRemove(value.id)}>Remover</button>
                </div>
                
            ))}
        </div>
    )
}

export default DataResult