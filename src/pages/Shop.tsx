import { useState } from "react";
import { Link } from 'react-router-dom';

import sectionalCouchImage from '../assets/black-L-couch.jpg';
import sphereLamp from '../assets/silver-sphere-lamp.jpg';

export function Shop() {

    const categories = ['Furniture', 'Storage', 'Beds', 'Kitchen', 'Lighting'];
    const productData: ProductItem[] = [
        {
            id: '1',
            image: sectionalCouchImage,
            title: 'Sectional Sofa',
            price: 799.99,
            category: 'Furniture',
            description: 'A sectional sofa in black.'
        },
        {
            id: '2',
            image: sphereLamp,
            title: 'Sphere Desk Lamp',
            price: 29.99,
            category: 'Lighting',
            description: 'A spherical white desk lamp in silver.'
        }
    ]


    const [selectedCategory, setSelectedCategory] = useState('All')

    // select filter
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <ul className="flex justify-center m-5">
                <li ><button className="m-4 rounded-lg px-4 py-2 border border-slate-500 text-slate-900 hover:border-2 hover:shadow-lg" onClick={() => handleCategoryClick('All')}>All</button></li>
                {categories.map(category => (
                    <li key={category}>
                        <button className="m-4 rounded-lg px-4 py-2 border border-slate-500 text-slate-900 hover:border-2 hover:shadow-lg" onClick={() => handleCategoryClick(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
                {(selectedCategory === 'All'
                    ? productData
                    : productData.filter((product) => product.category === selectedCategory)
                ).map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img className="w-full h-40 object-cover mb-2" src={product.image} alt={product.title} />
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}