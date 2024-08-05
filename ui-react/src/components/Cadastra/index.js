import React, { useState } from 'react';
import styles from './Cadastra.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CadastraProduto() {
    // Estado para armazenar os valores dos campos do formulário
    const [form, setForm] = useState({
        nome: '',
        descricao: '',
        preco: ''
    });

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você pode processar os dados do formulário (enviar para uma API, etc.)
        console.log('Formulário enviado:', form);
        await axios.post('https://salvus-system.onrender.com/api/produtos', {
            nome: form.nome,
            preco: form.preco,
            descricao: form.descricao
        }).then(() => toast.success('Produto cadastrado com sucesso!')).catch(({error}) => toast.error(error));

        // Resetar o formulário após o envio
        setForm({
            nome: '',
            descricao: '',
            preco: ''
        });
    };

    return (
        <main>
            <section className={styles.container}>
                <div className={styles.form_box}>
                    <h1 className={styles.title}>Cadastro de Produtos</h1>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default CadastraProduto;