import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout title={'Welcome'}>
            <div className={styles.container}>
                <h1>Hello World</h1>


            </div>
        </Layout>
    )
}
