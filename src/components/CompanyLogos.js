import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function CompanyLogos() {
    const logos = [
        {
            name: 'Department of Health & Human Services',
            url: '/images/hhs-logo.png',
            className: 'h-16 w-auto'
        },
        {
            name: 'Department of Defense',
            url: '/images/dod-logo.png',
            className: 'h-20 w-auto'
        },
        {
            name: 'Department of Energy',
            url: '/images/doe-logo.png',
            className: 'h-16 w-auto'
        }
    ];
    return (_jsx("section", { className: "bg-gradient-to-br from-blue-600 to-blue-800 py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-2xl font-bold text-white text-center mb-12", children: "Trusted by Leading Organizations" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center", children: logos.map((logo) => (_jsx("div", { className: "flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300", children: _jsx("img", { src: logo.url, alt: `${logo.name} logo`, className: `${logo.className} object-contain filter brightness-0 invert`, loading: "lazy" }) }, logo.name))) })] }) }));
}
