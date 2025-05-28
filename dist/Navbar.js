import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
var Navbar = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ] : _b, _c = _a.title, title = _c === void 0 ? 'My App' : _c;
    return (_jsx("nav", { className: "bg-gray-800 p-4", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx("div", { className: "text-white text-xl font-bold", children: title }), _jsx("ul", { className: "flex space-x-4", children: links.map(function (link, index) { return (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-white hover:text-gray-300 transition-colors", children: link.label }) }, index)); }) })] }) }));
};
export default Navbar;
