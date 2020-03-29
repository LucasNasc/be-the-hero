import React, { useState } from 'react';
import './styles.css';
import { FiSun, FiMoon, FiArrowLeft} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import api  from '../../services/api';
export default function NewIncident({ children }) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ value, setValue ] = useState('')
    const history =  useHistory()
    const ongId =  localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try{
            await api.post('incidents', data,  {
                headers: {
                    Authorization: ongId
                }
            })


            history.push('/profile');

        }catch(err) {
            alert('Erro ao cadastrar caso.') 
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
              <section>
                  <img src={logo} alt="Be The Hero"/>

                  <h1>Cadastrar novo caso</h1>
                  <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>


                  <Link to="/profile" className="back-link">
                  <FiArrowLeft size={16} color="#E02041" />
                  Voltar para Home
              </Link>
              </section>

              <form  onSubmit={handleNewIncident}>
                <input type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder=" Título do Caso "/>
                <textarea          
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder=" Descrição" />
                <input             
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder=" Valor Em Reais " />


                <button className="button" type="submit">Cadastrar</button>
              </form>
        </div>
    </div>
    )
}