"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var Navbar = function (_a) {
    var scrolled = _a.scrolled;
    return (_jsx("div", { className: "\n        fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 py-6\n      ", children: _jsxs("div", { className: "\n          transition-all duration-500 flex items-center gap-6 p-4 rounded-full \n          ".concat(scrolled
                ? "w-75 justify-center shadow-lg shadow-black/50 bg-navbar border border-border gap-4"
                : "w-full justify-between max-w-5xl bg-navbar/80 backdrop-blur-md border-b border-border", "\n        "), children: [_jsx("span", { className: "font-bold pr-4 text-nowrap", children: scrolled ? "FM" : "Francesco Milione" }), _jsxs("div", { className: "flex gap-6", children: [_jsx("a", { href: "#", children: "Home" }), _jsx("a", { href: "#", children: "Projects" }), _jsx("a", { href: "#", children: "Contact" })] })] }) }));
};
//# sourceMappingURL=Navbar.js.map