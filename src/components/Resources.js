import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText, Download } from 'lucide-react';
export default function Resources() {
    const resources = [
        {
            category: 'Guides & Templates',
            items: [
                { title: 'Grant Writing Best Practices', type: 'PDF Guide' },
                { title: 'Federal Grant Proposal Template', type: 'Template' },
                { title: 'Budget Development Worksheet', type: 'Spreadsheet' },
            ],
        },
        {
            category: 'Educational Content',
            items: [
                { title: 'Understanding Federal Grants', type: 'Article' },
                { title: 'Corporate Grant Writing Tips', type: 'Video' },
                { title: 'Grant Compliance Guide', type: 'PDF Guide' },
            ],
        },
        {
            category: 'Tools & Checklists',
            items: [
                { title: 'Proposal Review Checklist', type: 'Checklist' },
                { title: 'Grant Calendar Template', type: 'Template' },
                { title: 'Budget Calculator', type: 'Tool' },
            ],
        },
    ];
    return (_jsx("section", { id: "resources", className: "pt-24 pb-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Grant Writing Resources" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Access our collection of free resources to help you write better grant proposals and increase your success rate." })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: resources.map((section, index) => (_jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-6", children: section.category }), _jsx("div", { className: "space-y-4", children: section.items.map((item, idx) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 text-blue-600 mr-3" }), _jsxs("div", { children: [_jsx("h4", { className: "text-gray-900 font-medium", children: item.title }), _jsx("p", { className: "text-sm text-gray-600", children: item.type })] })] }), _jsx("button", { className: "text-blue-600 hover:text-blue-700", children: _jsx(Download, { className: "h-5 w-5" }) })] }, idx))) })] }, index))) })] }) }));
}
