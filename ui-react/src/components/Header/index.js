import styles from './Header.module.css';
import { TiArrowSortedDown } from "react-icons/ti";

function Header() {
    return (
        <header>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <span><a href='/'>🌿 Salvus</a></span>
                    </div>
                    <ul className={styles.nav_links}>
                        <li className={styles.nav_link}> <a href='cadastrar'>Cadastrar</a> </li>
                        <li className={`${styles.nav_link} ${styles.services}`}>
                            <a href='#-2'>Pesquisar
                            <span className={`${styles.react_icon} ${styles.dropdown_icon}`}>
                                <TiArrowSortedDown />
                            </span>
                            </a>
                            <ul className={styles.drop_down}>
                                <li> <a href='buscar_por_id'>Buscar por ID</a> </li>
                                <li> <a href="buscar_tudo">Buscar tudo</a> </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
    );
}



export default Header;