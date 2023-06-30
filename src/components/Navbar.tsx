import React from 'react'

export function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">My Website</div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="text-white hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/store" className="text-white hover:underline">
                                Store
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}