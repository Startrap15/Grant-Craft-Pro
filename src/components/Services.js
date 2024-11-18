import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Building2, GraduationCap, FileText, Users, ArrowRight } from 'lucide-react';
const services = [
    {
        icon: Building2,
        title: 'Government Grants & RFPs',
        description: 'Expert navigation of federal, state, and local government funding opportunities.',
        features: ['Proposal Development', 'RFP/RFQ Responses', 'Compliance Review'],
    },
    {
        icon: GraduationCap,
        title: 'Educational Funding',
        description: 'Specialized grant writing for educational institutions and programs.',
        features: ['Research Grants', 'Program Development', 'Equipment Funding'],
    },
    {
        icon: FileText,
        title: 'Corporate Grants',
        description: 'Strategic approach to securing corporate funding and partnerships.',
        features: ['CSR Programs', 'Innovation Grants', 'Partnership Proposals'],
    },
    {
        icon: Users,
        title: 'Nonprofit Funding',
        description: 'Comprehensive support for nonprofit organizations seeking grants.',
        features: ['Foundation Grants', 'Program Funding', 'Capacity Building'],
    },
];
export default function Services() {
    return (_jsx("section", { id: "services", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Our Specialized Services" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Comprehensive grant writing solutions tailored to your specific needs and goals" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: services.map((service, index) => {
                        const Icon = service.icon;
                        return (_jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow", children: [_jsx(Icon, { className: "h-12 w-12 text-blue-600 mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: service.title }), _jsx("p", { className: "text-gray-600 mb-4", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center text-gray-700", children: [_jsx(ArrowRight, { className: "h-4 w-4 text-blue-600 mr-2" }), feature] }, idx))) })] }, index));
                    }) })] }) }));
}
