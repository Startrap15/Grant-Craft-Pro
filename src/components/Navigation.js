import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Navigation({ onConsultationClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
            return;
        }
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
    };
    const menuItems = [
        { name: 'Services', action: () => scrollToSection('services') },
        { name: 'About', action: () => scrollToSection('about') },
        { name: 'Resources', href: '/resources' },
        { name: 'Blog', href: '/blog' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', action: () => scrollToSection('contact') },
    ];
    return (_jsxs("nav", { className: "bg-white shadow-lg w-full sticky top-0 z-50", children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16", children: [_jsx("div", { className: "flex items-center", children: _jsxs(Link, { to: "/", className: "flex items-center hover:text-blue-600 transition-colors", onClick: () => window.scrollTo(0, 0), children: [_jsx(BookOpen, { className: "h-8 w-8 text-blue-600" }), _jsx("span", { className: "ml-2 text-xl font-bold text-gray-800", children: "GrantCraft Pro" })] }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [menuItems.map((item) => (item.href ? (_jsx(Link, { to: item.href, className: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors", children: item.name }, item.name)) : (_jsx("button", { onClick: item.action, className: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors", children: item.name }, item.name)))), _jsx(Link, { to: "/portal", className: "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors", children: "Login" }), _jsx("button", { onClick: onConsultationClick, className: "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ml-2", children: "Free Consultation" })] }), _jsx("div", { className: "md:hidden flex items-center", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "text-gray-600 hover:text-gray-900 focus:outline-none", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) }) })] }) }), isOpen && (_jsx("div", { className: "md:hidden", children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [menuItems.map((item) => (item.href ? (_jsx(Link, { to: item.href, className: "text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium", onClick: () => setIsOpen(false), children: item.name }, item.name)) : (_jsx("button", { onClick: item.action, className: "w-full text-left text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium", children: item.name }, item.name)))), _jsx(Link, { to: "/portal", className: "text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium", onClick: () => setIsOpen(false), children: "Login" }), _jsx("button", { onClick: () => {
                                onConsultationClick();
                                setIsOpen(false);
                            }, className: "w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors mt-2", children: "Free Consultation" })] }) }))] }));
}
