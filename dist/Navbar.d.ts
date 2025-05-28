import React from 'react';
import './index.css';
interface NavbarProps {
    links?: {
        label: string;
        href: string;
    }[];
    title?: string;
    bgColor?: string;
    textColor?: string;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
