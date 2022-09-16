import Head from "next/head";
import style from '../styles/Layout.module.css';
import Menu from "./Menu";

export default function Layout({children, title}) {
    return (<div>
        <Head>
            <title>Store Cuba {title ? `| ${title}` : ''}</title>
            <meta name='Cuba' content='Store create in Next-js'/>
        </Head>
        <div>
            <Menu/>
        </div>
        <div className={style.container}>{children}</div>

        <div>feet</div>
    </div>)
}