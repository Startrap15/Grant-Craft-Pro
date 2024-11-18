import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star } from 'lucide-react';
const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Executive Director',
        organization: 'Education First Foundation',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
        content: 'The team\'s expertise in educational grants was invaluable. They helped us secure a $2M grant for our STEM program.',
    },
    {
        name: 'Michael Chen',
        role: 'Research Director',
        organization: 'Tech Innovations Lab',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
        content: 'Their attention to detail and understanding of government RFPs helped us win a major federal contract.',
    },
    {
        name: 'Lisa Rodriguez',
        role: 'Program Manager',
        organization: 'Community Health Initiative',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
        content: 'Outstanding support throughout the entire grant writing process. They truly understand nonprofit needs.',
    },
];
export default function Testimonials() {
    return (_jsx("section", { id: "testimonials", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Client Success Stories" }), _jsx("p", { className: "text-xl text-gray-600", children: "See how we've helped organizations secure funding and achieve their goals" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: "flex items-center mb-6", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current" }, i))) }), _jsx("p", { className: "text-gray-600 mb-6", children: testimonial.content }), _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "h-12 w-12 rounded-full object-cover" }), _jsxs("div", { className: "ml-4", children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-gray-600", children: testimonial.role }), _jsx("p", { className: "text-sm text-blue-600", children: testimonial.organization })] })] })] }, index))) })] }) }));
}
