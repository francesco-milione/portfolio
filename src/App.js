import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Navbar } from "./layout";
function ParallaxBackground() {
    var _a = useState(0), offset = _a[0], setOffset = _a[1];
    useEffect(function () {
        var handleScroll = function () {
            setOffset(window.scrollY * 0.5);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (_jsx("div", { className: "absolute inset-0", children: _jsx("div", { className: "absolute inset-0 bg-linear-to-b from-purple-600 to-bg", style: {
                transform: "translateY(".concat(offset, "px)")
            } }) }));
}
function Section() {
    return (_jsx("section", { className: "h-screen flex items-center justify-center", children: _jsx("p", { className: "text-2xl opacity-70", children: "Scrolla..." }) }));
}
function Hero() {
    return (_jsxs("section", { className: "h-screen flex items-center justify-center relative overflow-hidden", children: [_jsx(ParallaxBackground, {}), _jsx("h1", { className: "text-5xl font-bold z-10", children: "Francesco Milione" })] }));
}
function App() {
    var _a = useState(false), scrolled = _a[0], setScrolled = _a[1];
    useEffect(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (_jsxs("div", { className: "bg-black text-white", children: [_jsx(Navbar, { scrolled: scrolled }), _jsx(Hero, {}), _jsx(Section, {}), _jsx(Section, {})] }));
}
export default App;
//# sourceMappingURL=App.js.map