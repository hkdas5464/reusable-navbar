import React from 'react';
import './index.css';

     interface NavbarProps {
       links?: { label: string; href: string }[];
       title?: string;
     }

     const Navbar: React.FC<NavbarProps> = ({
       links = [
         { label: 'Home', href: '/' },
         { label: 'About', href: '/about' },
         { label: 'Contact', href: '/contact' },
       ],
       title = 'My App',
     }) => {
       return (
         <nav className="bg-gray-800 p-4">
           <div className="container mx-auto flex justify-between items-center">
             <div className="text-white text-xl font-bold">{title}</div>
             <ul className="flex space-x-4">
               {links.map((link, index) => (
                 <li key={index}>
                   <a
                     href={link.href}
                     className="text-white hover:text-gray-300 transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         </nav>
       );
     };

     export default Navbar;