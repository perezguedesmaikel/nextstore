import Layout from "../../components/Layout";
import {getItems} from "../../services/itemServices";
import Image from 'next/image';

export default function Index({items}) {
    return <Layout title={'Products'}>
        <div><h1>Store</h1></div>
        {items && items.map(item => <div key={item.id}>
            <Image src={item.image} width='200' height='200'/>
            {item.title}</div>)}
    </Layout>
}

export async function getStaticProps() {
    const res = await getItems();
    return {
        props: {items: res}
    }
}
