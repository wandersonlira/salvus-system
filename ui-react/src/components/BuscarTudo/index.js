import React, {useState, useEffect} from 'react'
import styles from './BuscarTudo.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BuscarTudo() {

 const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
    const res = await axios.get('https://salvus-system.onrender.com/api/produtos')
      setProdutos(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getProdutos();
  }, [setProdutos]);


// -------------- ATUALIZA -----------------------------------

    // Estado para trocar a visibilidade do campo de atualização
    const [dispForm, setDispForm] = useState({
        display: ''
    });

   // Estado para armazenar os valores dos campos do formulário
    const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    data_descricao: ''
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

       await axios.put('https://salvus-system.onrender.com/api/produtos/' + form.id, {
            nome: form.nome,
            preco: form.preco,
            descricao: form.descricao
        }).then( async ({data}) => {
           setProdutos(getProdutos);
           
            // após deleção a tabela é carraga com os dados atualizados
            const ProdutosAltualizados = produtos.filter((produto) => produto.id === form.id);
            setProdutos(ProdutosAltualizados);
            toast.success(data);
        }).catch(({data}) => toast.error(data));
        // Resetar o formulário após o envio
        setForm({
            nome: '',
            descricao: '',
            preco: '',
            data_descricao: ''
        });

        setDispForm('none'); 
        // setDispTable('flex');
    };

     // Função para lidar com o cancelamento
    const handleCancel = () => {
    // Lógica para cancelar, por exemplo, limpar os campos
    setForm({
      nome: '',
      descricao: '',
      preco: '',
      data_descricao: ''
    });

    setDispForm('none'); 
  };

// ------------- TABLE ----------------------------------

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
            <section className={styles.container} style={{display:`${dispForm}`}}>
                <div className={styles.form_box}>
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
                        <button type="submit">Atualizar</button>
                        <button className={styles.buttonCancelar} type='button' onClick={handleCancel}>
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
                                 <FaEdit onClick={() => {setForm(item); setDispForm('flex');}} />
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
};

export default BuscarTudo;