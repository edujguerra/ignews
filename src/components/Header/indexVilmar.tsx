import { useState } from 'react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    const [menuSelected, setMenuSelected] = useState(0);

    const menus = [
        {
            id: 0,
            name: "Home",
        },
        {
            id: 1,
            name: "Post",
            onClick: () => {                
            }
        },
        {
            id: 3,
            name: "Contatos",

        },
        {
            id: 4,
            name: "Sobre",
            onClick: () => alert("Sou o Eduardo Guerra")
        }
    ]
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />            
                <nav>
                    {menus.map(menu => (
                    <a
                        key={menu.id}
                        className={menuSelected === menu.id ? styles.active : ""}
                        onClick={() => {
                            setMenuSelected(menu.id);
                            if (menu.onClick) menu.onClick();
                        }}
                        >{menu.name}</a>
                    ))}
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}