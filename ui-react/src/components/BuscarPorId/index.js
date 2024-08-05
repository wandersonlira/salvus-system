import React, { useState } from 'react';
import styles from './BuscarPorId.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { retornaErro } from '../../ultils/funcoesUltils';


function BuscarPorId() {

    // Estado para armazenar os valores dos campos do formulário
    const [form, setForm] = useState({
        id: '',
        nome: '',
        descricao: '',
        preco: '',
        data_descricao: ''
    });


    // Estado para armazenar os valores na tabela
    const [produtos, setProdutos] = useState([]);


    const [dispForm, setDispForm] = useState({
        displayId: 'flex',
        displayAtualiza: 'none'
    });

    
    // Função para lidar com mudanças nos campos do formulário
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id > 0) {                
               await axios.get('https://salvus-system.onrender.com/api/produtos/' + form.id)
               .then(response => { setProdutos([response.data]);
               }).catch(error => {
                retornaErro(error);
               });
        } else {
            toast.error("ID inválido");
        }
    };


    const handleCancel = () => {
        // reseta todos campos do formulário
        setForm({
            id: '',
            nome: '',
            descricao: '',
            preco: '',
            data_descricao: ''
        });
        // Torna o display na visibilidade padrão
        setDispForm({
            displayAtualiza: 'none',
            displayId: 'flex'
        }); 
      };


    const handleSubmitAtualiza = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.put('https://salvus-system.onrender.com/api/produtos/' + form.id, {
                nome: form.nome,
                preco: form.preco,
                descricao: form.descricao
            });
            // CHAMAR A FUNÇÃO PARA atualizar a alteração
            const resposta = await axios.get('https://salvus-system.onrender.com/api/produtos/' + form.id);
            setProdutos([resposta.data]);
            toast.success(res.data);
            // Resetar o formulário após o envio
            setForm({
                id: '',
                nome: '',
                descricao: '',
                preco: '',
                data_descricao: ''
            });
            // Troca a visibilidade do display
            setDispForm({
                displayAtualiza: 'none',
                displayId: 'flex'
            });
        } catch (error) {
            toast.error(error);
        }
    }


    const handleDelete = async (id) => {
        await axios.delete('https://salvus-system.onrender.com/api/produtos/' + id)
        .then(({data}) => {
            // após deleção a tabela é carraga com os dados atualizados
            const newArray = produtos.filter((user) => user.id !== id);
            setProdutos(newArray);
            toast.success(data);
        })
        .catch(({data}) => toast.error(data));
    };

    return (
        <main>
            <section className={styles.container} style={{display: `${dispForm.displayId}`}} >
                <div className={styles.form_box}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input style={{width: '80%'}}
                                type="number"
                                id="id"
                                name="id"
                                placeholder='ID produto'
                                value={form.id}
                                onChange={handleChange}
                                required
                                step="0.01"
                            />
                        </div>
                        <button type="submit">Buscar</button>
                    </form>
                </div>
            </section>

            <section className={styles.container} style={{display:`${dispForm.displayAtualiza}`}}>
                <div className={styles.form_box}>
                    <form onSubmit={handleSubmitAtualiza}>
                        <div>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder='Nome do produto'
                                value={form.nome}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                id="preco"
                                name="preco"
                                placeholder='Preço'
                                value={form.preco}
                                onChange={handleChange}
                                required
                                step="0.01"
                            />
                            <textarea
                                id="descricao"
                                name="descricao"
                                placeholder='Descrição'
                                value={form.descricao}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Atualizar</button>
                        <button className={styles.buttonCancelar} type="button" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </form>
                </div>
            </section>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Preço</th>
                        <th className={styles.th}>Descrição</th>
                        <th className={styles.th}>Cadastrado</th>
                        <th className={styles.th}></th>
                        <th className={styles.th}></th>
                    </tr>
                </thead>
                <tbody >
                    {produtos.map((item, i) => (
                        <tr key={i} className={styles.tr}>
                            <td className={styles.td} style={{width: '20%'}} >{item.nome}</td>
                            <td className={styles.td} style={{width: '10%'}} >{item.preco}</td>
                            <td className={styles.td} style={{width: '35%'}} >{item.descricao}</td>
                            <td className={styles.td} style={{width: '25%'}} >{item.data_descricao}</td>
                            <td className={styles.td} style={{width: '5%'}}>
                                 <FaEdit onClick={() => {setForm(item); setDispForm({displayAtualiza: 'flex', displayId: 'none'});}} />
                            </td>
                            <td className={styles.td} style={{width: '5%'}}>
                                <FaTrash onClick={() => handleDelete(item.id)} />
                            </td>
                        </tr>
                     ))}
                </tbody>
        </table>

        </main>
    );
}

export default BuscarPorId;