import { useState } from "react";
import { Link } from 'react-router-dom';
import sectionalCouchImage from '../assets/black-L-couch.jpg';

export function Shop() {

    const categories = ['All', 'Furniture', 'Storage', 'Beds', 'Kitchen', 'Lighting'];
    const productData: ProductItem[] = [
        {
            id: '1',
            image: sectionalCouchImage,
            title: 'Sectional Sofa',
            price: 799.99,
            category: 'Furniture',
            description: 'A sectional sofa in black.'
        }
    ]


    const [selectedCategory, setSelectedCategory] = useState('all')

    // select filter
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <ul>
                <li><button onClick={() => handleCategoryClick('All')}>All</button></li>
                {categories.map(category => (
                    <li key={category}>
                        <button onClick={() => handleCategoryClick(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <div>
                {(selectedCategory === 'all'
                    ? productData
                    : productData.filter((product) => product.category === selectedCategory)
                ).map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div >
        </>
    )
}