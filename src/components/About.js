import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, Users, Target, Briefcase } from 'lucide-react';
export default function About() {
    const team = [
        {
            name: 'Dr. Emily Carter',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
            bio: '15+ years in grant writing with expertise in federal funding',
        },
        {
            name: 'James Wilson',
            role: 'Senior Grant Strategist',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
            bio: 'Former federal grant reviewer with 10+ years experience',
        },
        {
            name: 'Maria Rodriguez',
            role: 'Nonprofit Specialist',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
            bio: 'Specialized in foundation and corporate grants',
        },
    ];
    return (_jsx("section", { id: "about", className: "pt-24 pb-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "About GrantCraft Pro" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We're a team of dedicated grant writing professionals with a passion for helping organizations secure the funding they need to achieve their missions." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20", children: [
                        { icon: Award, title: 'Excellence', text: 'Committed to delivering the highest quality grant proposals' },
                        { icon: Users, title: 'Client Focus', text: "Tailored approach for each organization's unique needs" },
                        { icon: Target, title: 'Success Rate', text: '85% grant approval rate across all categories' },
                        { icon: Briefcase, title: 'Experience', text: '15+ years of professional grant writing expertise' },
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (_jsxs("div", { className: "text-center p-6", children: [_jsx(Icon, { className: "h-12 w-12 text-blue-600 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: item.title }), _jsx("p", { className: "text-gray-600", children: item.text })] }, index));
                    }) }), _jsxs("div", { className: "mb-20", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-8 text-center", children: "Our Expert Team" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: team.map((member, index) => (_jsxs("div", { className: "bg-gray-50 rounded-xl p-6 text-center", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover" }), _jsx("h4", { className: "text-xl font-semibold text-gray-900 mb-1", children: member.name }), _jsx("p", { className: "text-blue-600 mb-3", children: member.role }), _jsx("p", { className: "text-gray-600", children: member.bio })] }, index))) })] })] }) }));
}
