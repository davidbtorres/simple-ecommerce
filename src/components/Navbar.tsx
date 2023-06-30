import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="bg-teal-400 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">SHELF</div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="text-white hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/store" className="text-white hover:underline">
                                Store
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}