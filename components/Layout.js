import Link from "next/link";
import Head from "next/head";

export default function Layout({children, title}) {
    return (<div>
        <Head>
            <title>Store Cuba {title ? `| ${title}` : ''}</title>
            <meta name='Cuba' content='Store create in Next-js'/>
        </Head>
        <div>
            <Link href={'/store'}><a>Store</a></Link>
            <Link href={'/faq'}><a>Faq</a></Link>
            <Link href={'/'}><a>Home</a></Link>
        </div>
        {children}
        <div>feet</div>
    </div>)
}