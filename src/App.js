import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';
import Portal from './pages/Portal';
import ConsultationModal from './components/ConsultationModal';
import Chatbot from './components/Chatbot';
const queryClient = new QueryClient();
export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleConsultationClick = () => {
        setIsModalOpen(true);
    };
    return (_jsx(BrowserRouter, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(TopBar, {}), _jsx(Navigation, { onConsultationClick: handleConsultationClick }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, { onConsultationClick: handleConsultationClick }) }), _jsx(Route, { path: "/resources", element: _jsx(Resources, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(Pricing, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) }), _jsx(Route, { path: "/portal", element: _jsx(Portal, {}) })] }), _jsx(ConsultationModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) }), _jsx(Chatbot, {})] }) }) }));
}
