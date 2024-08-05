import styles from './Home.module.css'

function Home() {
    return (
        <main>
            <section className={styles.container}>
                <div>
                    <h1>Olá, bem-vindo!</h1>
                    <p>Esta é uma aplicação fullstack de cadastro de produto desenvolvida em Node.js e React.js com deploy
                         em hospedagens gratuitas como solicitado em desafio da <span>Salvus</span>.</p>
                </div>
            </section>
        </main>
    );   

}

export default Home;