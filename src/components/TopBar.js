import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from 'lucide-react';
export default function TopBar() {
    return (_jsx("div", { className: "bg-gray-100 py-2", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "flex justify-between items-center", children: _jsx("div", { className: "flex items-center space-x-6", children: _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", alt: "Google Reviews", className: "h-6" }), _jsx("div", { className: "flex ml-2", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }, i))) }), _jsx("span", { className: "ml-1 text-sm text-gray-600", children: "5.0" })] }) }) }) }) }));
}
