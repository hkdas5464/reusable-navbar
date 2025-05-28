import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
var Navbar = function (_a) {
    var _b = _a.links, links = _b === void 0 ? [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ] : _b, _c = _a.title, title = _c === void 0 ? 'My App' : _c, _d = _a.bgColor, bgColor = _d === void 0 ? 'navbar-bg' : _d, _e = _a.textColor, textColor = _e === void 0 ? 'navbar-text' : _e;
    return (_jsx("nav", { className: "p-4 bg-".concat(bgColor), children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx("div", { className: "text-".concat(textColor, " text-xl font-bold"), children: title }), _jsx("ul", { className: "flex space-x-4", children: links.map(function (link, index) { return (_jsx("li", { children: _jsxs("a", { href: link.href, className: "".concat(textColor, " hover:text-navbar-hover transition-colors"), children: [link.label, "hgrfrg"] }) }, index)); }) })] }) }));
};
export default Navbar;
