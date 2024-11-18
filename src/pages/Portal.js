import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, FileText, CreditCard, LogOut, User } from 'lucide-react';
export default function Portal() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    // Mock data - replace with actual data from your backend
    const userProfile = {
        name: 'John Doe',
        email: 'john@example.com',
        plan: 'Professional',
        nextBilling: '2024-03-15',
    };
    const savedGrants = [
        {
            id: '1',
            title: 'Education Innovation Grant',
            lastModified: '2024-02-15',
            status: 'completed',
        },
        {
            id: '2',
            title: 'Community Development Project',
            lastModified: '2024-02-10',
            status: 'draft',
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: _jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [_jsx("div", { className: "lg:col-span-1", children: _jsx("div", { className: "bg-white rounded-lg shadow-sm p-6", children: _jsxs("div", { className: "space-y-1", children: [_jsxs("button", { onClick: () => setActiveTab('dashboard'), className: `w-full flex items-center px-4 py-2 text-sm rounded-md ${activeTab === 'dashboard'
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}`, children: [_jsx(User, { className: "h-5 w-5 mr-3" }), "Dashboard"] }), _jsxs("button", { onClick: () => setActiveTab('grants'), className: `w-full flex items-center px-4 py-2 text-sm rounded-md ${activeTab === 'grants'
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}`, children: [_jsx(FileText, { className: "h-5 w-5 mr-3" }), "Saved Grants"] }), _jsxs("button", { onClick: () => setActiveTab('billing'), className: `w-full flex items-center px-4 py-2 text-sm rounded-md ${activeTab === 'billing'
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}`, children: [_jsx(CreditCard, { className: "h-5 w-5 mr-3" }), "Billing"] }), _jsxs("button", { onClick: () => setActiveTab('settings'), className: `w-full flex items-center px-4 py-2 text-sm rounded-md ${activeTab === 'settings'
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}`, children: [_jsx(Settings, { className: "h-5 w-5 mr-3" }), "Settings"] }), _jsxs("button", { onClick: () => navigate('/'), className: "w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md", children: [_jsx(LogOut, { className: "h-5 w-5 mr-3" }), "Sign Out"] })] }) }) }), _jsx("div", { className: "lg:col-span-3", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [activeTab === 'dashboard' && (_jsxs("div", { children: [_jsxs("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: ["Welcome, ", userProfile.name] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-blue-50 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Current Plan" }), _jsx("p", { className: "text-gray-600", children: userProfile.plan }), _jsxs("p", { className: "text-sm text-gray-500 mt-1", children: ["Next billing: ", userProfile.nextBilling] })] }), _jsxs("div", { className: "bg-green-50 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Quick Actions" }), _jsx("button", { onClick: () => window.location.href = '/bot', className: "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors", children: "Launch Grant Bot" })] })] })] })), activeTab === 'grants' && (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Saved Grants" }), _jsx("div", { className: "space-y-4", children: savedGrants.map((grant) => (_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: grant.title }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Last modified: ", grant.lastModified] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("span", { className: `px-3 py-1 text-xs font-medium rounded-full ${grant.status === 'completed'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-yellow-100 text-yellow-800'}`, children: grant.status }), _jsx("button", { className: "text-blue-600 hover:text-blue-700", children: "Edit" })] })] }, grant.id))) })] })), activeTab === 'billing' && (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Billing & Subscription" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Current Plan" }), _jsxs("p", { className: "text-gray-600 mb-4", children: ["You are currently on the ", userProfile.plan, " plan."] }), _jsx("button", { className: "text-blue-600 hover:text-blue-700 font-medium", children: "Change Plan" })] }), _jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Payment Method" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Visa ending in 4242" }), _jsx("button", { className: "text-blue-600 hover:text-blue-700 font-medium", children: "Update Payment Method" })] })] })] })), activeTab === 'settings' && (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Account Settings" }), _jsxs("form", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name" }), _jsx("input", { type: "text", id: "name", defaultValue: userProfile.name, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email Address" }), _jsx("input", { type: "email", id: "email", defaultValue: userProfile.email, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" })] }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors", children: "Save Changes" })] })] }))] }) })] }) }) }));
}
