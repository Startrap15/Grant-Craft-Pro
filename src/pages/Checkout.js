import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Shield, Zap, Building2, ArrowLeft } from 'lucide-react';
import { initSquare, createPayment } from '../api/square';
const planIcons = {
    basic: Shield,
    professional: Zap,
    enterprise: Building2
};
const planDetails = {
    basic: {
        name: 'Basic Plan',
        monthly: 75,
        annual: 750,
        features: [
            'Access to core grant-writing functions',
            'Basic support',
            'PDF & Word output formats'
        ]
    },
    professional: {
        name: 'Professional Plan',
        monthly: 150,
        annual: 1400,
        features: [
            'All Basic features',
            'Multiple output formats',
            'Priority support',
            'Data storage'
        ]
    },
    enterprise: {
        name: 'Enterprise Plan',
        monthly: 250,
        annual: 2400,
        features: [
            'All Professional features',
            'Full customization',
            'Priority 24/7 support',
            'Custom API access'
        ]
    }
};
export default function Checkout() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentForm, setPaymentForm] = useState(null);
    const plan = searchParams.get('plan') || 'basic';
    const billing = searchParams.get('billing') || 'monthly';
    const PlanIcon = planIcons[plan];
    const details = planDetails[plan];
    const amount = billing === 'monthly' ? details.monthly : details.annual;
    useEffect(() => {
        if (!plan || !billing) {
            navigate('/pricing');
            return;
        }
        async function initializeSquare() {
            try {
                const square = await initSquare();
                const form = await square.card();
                await form.attach('#card-container');
                setPaymentForm(form);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to initialize payment form');
            }
        }
        initializeSquare();
        return () => {
            if (paymentForm) {
                paymentForm.destroy();
            }
        };
    }, [plan, billing, navigate]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (!paymentForm) {
                throw new Error('Payment form not initialized');
            }
            const result = await createPayment(paymentForm, amount);
            if (result.payment) {
                navigate('/portal', {
                    state: {
                        success: true,
                        message: 'Payment successful! Your subscription is now active.'
                    }
                });
            }
            else {
                throw new Error('Payment failed');
            }
        }
        catch (err) {
            setError(err instanceof Error ? err.message : 'Payment failed');
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("button", { onClick: () => navigate('/pricing'), className: "flex items-center text-gray-600 hover:text-gray-900 mb-8", children: [_jsx(ArrowLeft, { className: "h-5 w-5 mr-2" }), "Back to Pricing"] }), _jsxs("div", { className: "bg-white rounded-2xl shadow-sm overflow-hidden", children: [_jsx("div", { className: "bg-blue-600 px-8 py-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-white", children: "Complete Your Subscription" }), _jsxs("p", { className: "mt-1 text-blue-100", children: ["You're subscribing to the ", details.name, " with ", billing, " billing"] })] }), _jsx(PlanIcon, { className: "h-12 w-12 text-white opacity-75" })] }) }), error && (_jsx("div", { className: "px-8 py-4 bg-red-50 border-l-4 border-red-500", children: _jsx("p", { className: "text-red-700", children: error }) })), _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Plan Features:" }), _jsx("ul", { className: "space-y-3", children: details.features.map((feature) => (_jsxs("li", { className: "flex items-start", children: [_jsx("svg", { className: "h-5 w-5 text-green-500 mt-1 mr-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }), _jsx("span", { className: "text-gray-600", children: feature })] }, feature))) })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "card-container", className: "block text-sm font-medium text-gray-700 mb-2", children: "Card Details" }), _jsx("div", { id: "card-container", className: "p-4 border border-gray-300 rounded-lg" })] }), _jsx("button", { type: "submit", disabled: loading, className: "w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? 'Processing...' : `Pay ${billing === 'monthly' ? `$${amount}/month` : `$${amount}/year`}` })] }), _jsxs("div", { className: "mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: "h-5 w-5 text-gray-400 mr-1.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }), "Secure payment"] }), _jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: "h-5 w-5 text-gray-400 mr-1.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }), "SSL encrypted"] })] })] })] })] }) }));
}
