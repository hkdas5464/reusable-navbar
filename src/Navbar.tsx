import React from 'react';
     import './index.css';

     interface NavbarProps {
       links?: { label: string; href: string }[];
       title?: string;
       bgColor?: string;
       textColor?: string;
     }

     const Navbar: React.FC<NavbarProps> = ({
       links = [
         { label: 'Home', href: '/' },
         { label: 'About', href: '/about' },
         { label: 'Contact', href: '/contact' },
       ],
       title = 'My App',
       bgColor = 'navbar-bg',
       textColor = 'navbar-text',
     }) => {
       return (
         <nav className={`p-4 bg-${bgColor}`}>
           <div className="container mx-auto flex justify-between items-center">
             <div className={`text-${textColor} text-xl font-bold`}>{title}</div>
             <ul className="flex space-x-4">
               {links.map((link, index) => (
                 <li key={index}>
                   <a
                     href={link.href}
                     className={`${textColor} hover:text-navbar-hover transition-colors`}
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