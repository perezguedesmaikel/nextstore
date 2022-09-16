import Layout from "../../components/Layout";
import {getItems} from "../../services/itemServices";
import Product from "../../components/Product";
import style from '../../styles/Product.module.css'

export default function Index({items}) {
    return <Layout title={'Products'}>
        <div><h1>Store</h1></div>
        <div className={style.items}>
            {items && items.map(item => <Product key={item.id} item={item} showAs={'default'}/>)}
        </div>
    </Layout>
}

export async function getStaticProps() {
    const res = await getItems();
    return {
        props: {items: res}
    }
}
