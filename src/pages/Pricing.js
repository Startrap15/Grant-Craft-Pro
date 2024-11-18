import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Shield, Zap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const plans = [
    {
        name: 'Basic',
        icon: Shield,
        price: {
            monthly: 75,
            annual: 750
        },
        description: 'Perfect for individuals and small organizations starting their grant journey.',
        features: [
            'Access to core grant-writing functions',
            'Basic support',
            'PDF & Word output formats',
            'Up to 5 grant templates',
            'Email support'
        ]
    },
    {
        name: 'Professional',
        icon: Zap,
        price: {
            monthly: 150,
            annual: 1400
        },
        description: 'Ideal for growing organizations with regular grant applications.',
        features: [
            'All Basic features',
            'Multiple output formats',
            'Priority support',
            'Data storage for reusing inputs',
            'Unlimited grant templates',
            'Chat support'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        icon: Building2,
        price: {
            monthly: 250,
            annual: 2400
        },
        description: 'For organizations requiring full customization and premium support.',
        features: [
            'All Professional features',
            'Full customization options',
            'Priority 24/7 support',
            'Unlimited everything',
            'Custom API access',
            'Dedicated account manager'
        ]
    }
];
export default function Pricing() {
    const [annual, setAnnual] = React.useState(true);
    return (_jsx("div", { className: "bg-gray-50 py-24", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 sm:text-4xl", children: "GrantCraft Pro Grant Bot Subscriptions" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Choose a plan that fits your grant-writing needs. Our flexible subscription options provide support, customization, and ease of use." })] }), _jsx("div", { className: "mt-12 flex justify-center", children: _jsx("div", { className: "relative", children: _jsxs("div", { className: "flex items-center space-x-4 bg-white rounded-lg p-1 shadow-sm", children: [_jsx("button", { onClick: () => setAnnual(false), className: `px-4 py-2 text-sm font-medium rounded-md transition-colors ${!annual ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-gray-900'}`, children: "Monthly" }), _jsxs("button", { onClick: () => setAnnual(true), className: `px-4 py-2 text-sm font-medium rounded-md transition-colors ${annual ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-gray-900'}`, children: ["Annual", _jsx("span", { className: "ml-1 text-xs", children: "Save 20%" })] })] }) }) }), _jsx("div", { className: "mt-16 grid gap-8 lg:grid-cols-3", children: plans.map((plan) => {
                        const Icon = plan.icon;
                        return (_jsxs("div", { className: `relative bg-white rounded-2xl shadow-sm flex flex-col ${plan.popular ? 'ring-2 ring-blue-600' : ''}`, children: [plan.popular && (_jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2", children: _jsx("span", { className: "bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium", children: "Most Popular" }) })), _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: plan.name }), _jsx("p", { className: "mt-4 text-sm text-gray-500", children: plan.description })] }), _jsx(Icon, { className: "h-8 w-8 text-blue-600" })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("p", { className: "text-5xl font-bold text-gray-900", children: ["$", annual ? plan.price.annual : plan.price.monthly] }), _jsx("p", { className: "mt-1 text-sm text-gray-500", children: annual ? 'per year' : 'per month' })] }), _jsx("ul", { className: "mt-8 space-y-4", children: plan.features.map((feature) => (_jsxs("li", { className: "flex items-start", children: [_jsx("svg", { className: "h-6 w-6 text-green-500 flex-shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), _jsx("span", { className: "ml-3 text-gray-700", children: feature })] }, feature))) })] }), _jsx("div", { className: "p-8 pt-0 mt-auto", children: _jsx(Link, { to: `/checkout?plan=${plan.name.toLowerCase()}&billing=${annual ? 'annual' : 'monthly'}`, className: `block w-full text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${plan.popular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`, children: "Subscribe Now" }) })] }, plan.name));
                    }) }), _jsxs("div", { className: "mt-20", children: [_jsx("h3", { className: "text-2xl font-bold text-center text-gray-900 mb-12", children: "Frequently Asked Questions" }), _jsx("div", { className: "grid gap-8 lg:grid-cols-2", children: [
                                {
                                    q: 'How does billing work?',
                                    a: 'You will be billed at the start of each billing cycle (monthly or annually). You can cancel or change your plan at any time.'
                                },
                                {
                                    q: 'Can I upgrade or downgrade my plan?',
                                    a: 'Yes, you can change your plan at any time. The new rate will be prorated based on your remaining subscription period.'
                                },
                                {
                                    q: 'Is my data secure?',
                                    a: 'Yes, we use industry-standard encryption and security measures to protect your data. We never share your information with third parties.'
                                },
                                {
                                    q: 'What payment methods do you accept?',
                                    a: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for payment.'
                                }
                            ].map((faq) => (_jsxs("div", { className: "bg-white rounded-lg p-8 shadow-sm", children: [_jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-2", children: faq.q }), _jsx("p", { className: "text-gray-600", children: faq.a })] }, faq.q))) })] })] }) }));
}
