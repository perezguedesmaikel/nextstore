import Link from "next/link";
import Image from 'next/image';
import style from '../styles/Product.module.css';

export default function Product({item, showAs}) {
    if (showAs === 'page') {
        return (<div>Page</div>)
    }
    if (showAs === 'listItem') {
        return (<div>list item</div>)
    }
    return <div className={style.item}>
        <div>
            <Link href={`/store/url-for-my-component`}>
                <a>
                    <Image src={item.image} alt={item.title} width={500} height={500}/>
                </a>
            </Link>
        </div>
        <div>
            <h3>
                <Link href={`/store/url-for-my-component`}>
                    <a>
                        {item.title}
                    </a>
                </Link>
            </h3>
        </div>
        <div>${item.price}</div>
        <button>Add to cart</button>
    </div>

}