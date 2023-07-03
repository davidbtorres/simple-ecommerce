import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import sectionalCouchImage from '../assets/black-L-couch.jpg';
import sphereLamp from '../assets/silver-sphere-lamp.jpg';
import CurrencyFormatUS from "../utilities/CurrencyFormat";

export function Shop() {

    const categories = ['All', 'Furniture', 'Storage', 'Beds', 'Kitchen', 'Lighting'];
    const productData: ProductItem[] = [
        {
            id: '1',
            image: sectionalCouchImage,
            title: 'Sectional Sofa',
            price: 1799.99,
            category: 'Furniture',
            description: 'A sectional sofa in black.'
        },
        {
            id: '2',
            image: sphereLamp,
            title: 'Sphere Desk Lamp',
            price: 89.99,
            category: 'Lighting',
            description: 'A spherical white desk lamp in silver.'
        }
    ]


    // use category selected from banner link or 'all' if accessed through shop button
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryData = queryParams.get('data');
    const categoryArg = categoryData ? JSON.parse(decodeURIComponent(categoryData)) : 'All';


    const [selectedCategory, setSelectedCategory] = useState(categoryArg)

    // select filter
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <ul className="flex justify-center m-5">
                {categories.map(category => (
                    <li key={category}>
                        <button className={`m-2 bg-white rounded-lg px-4 py-2 border border-slate-500 text-slate-900 hover:border-2 hover:shadow-lg active:bg-slate-400 active:text-white ${category === selectedCategory ? 'border-2 shadow-lg' : ''}`} onClick={() => handleCategoryClick(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
                {(selectedCategory === 'All'
                    ? productData
                    : productData.filter((product) => product.category === selectedCategory)
                ).map((product) => {
                    const query = encodeURIComponent(JSON.stringify(product));
                    return (
                        <Link to={`/product?data=${query}`} key={product.id}>
                            <div className="bg-white rounded-lg shadow-lg p-4 hover:border-slate-600 hover:border-2">
                                <img className="w-full h-40 object-cover mb-2" src={product.image} alt={product.title} />
                                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600"><CurrencyFormatUS value={product.price} /></p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}