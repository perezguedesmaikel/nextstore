import Link from "next/link";
import style from '../styles/Menu.module.css';

export default function Menu() {
    return (
        <nav className={style.menu}>
            <div>
                <Link href={'/'}><a className={style.link}>Home</a></Link>
                <Link href={'/store'}><a className={style.link}>Store</a></Link>
                <Link href={'/faq'}><a className={style.link}>Faq</a></Link>
            </div>
            <div><a href={'#'} className={style.link}>Cart (0)</a></div>
        </nav>
    )
}