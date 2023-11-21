import React, { useState } from 'react'
import './FormProduct.css'
import { useCPF } from '../Hooks/useCPF'

function FormProduct({ setIsProdEmpty, setIsCpfValid, setUserData, userData, userId, setUserId}) {
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [product, setProduct] = useState('')

    const handleChange = (event) => {
        const {id, value} = event.target

        switch(id){
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'cpf':
                setCPF(value)
                break
            case 'product':
                setProduct(value.toString())
                break
            default:
                console.log("Campo não encontrado!")
                break
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setCPF('')
        setProduct('')
    }

    const validateCPF = useCPF(cpf) 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0 || email.length === 0 || cpf.length === 0 || product.length === 0){
            setIsProdEmpty(true)
        } else {
            setIsProdEmpty(false)
            // o cpf só irá ser checado após a validação de campos vazios, o if usará o resultado do custom hook criado para verificação do CPF
            if (cpf.length >= 11) { //a função do teste cpf só pode ser acessada se o cpf tiver 11 caracteres, se não o programa da erro
                if (validateCPF) {
                    setIsCpfValid(true)
                    setUserId(userId + 1) //aumenta o numero do id para exibir no resultado
                    setUserData([...userData, {
                        name:name,
                        email: email,
                        cpf: cpf,
                        product: product,
                        id: userId, // estava com problemas em exibir o id e colocar dentro do objeto foi a forma como consegui solucionar o problema
                        date: new Date().toLocaleTimeString()
                    }])
                    resetForm()
                } else {
                    setIsCpfValid(false)
                }
            } else {
                setIsProdEmpty(true)
            }
        }
    }

    return (
        <form>
            <div className='form product'>
                <div className="field name">
                    <label htmlFor="name">Nome:</label>
                    <input onChange={handleChange} value={name} type="text" id='name'/>
                </div>
                <div className="field email">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={email} type="text" id='email'/>
                </div>
                <div className="field cpf">
                    <label htmlFor="cpf">CPF:</label>
                    <input maxLength={11} onChange={handleChange} value={cpf} type="text" id='cpf'/>
                </div>
                <div className='field product'>
                    <label htmlFor="product">Produto:</label>
                    <select id='product' value={product} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Computador">Computador</option>
                        <option value="Celular">Celular</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Notebook">Notebook</option>
                    </select>
                </div>
                
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}

export default FormProduct;