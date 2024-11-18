import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { initSquare, createPayment } from '../api/square';
export default function PaymentTest() {
    const [paymentForm, setPaymentForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
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
            finally {
                setLoading(false);
            }
        }
        initializeSquare();
        return () => {
            if (paymentForm) {
                paymentForm.destroy();
            }
        };
    }, []);
    const handlePayment = async () => {
        setLoading(true);
        setError(null);
        try {
            if (!paymentForm) {
                throw new Error('Payment form not initialized');
            }
            const result = await createPayment(paymentForm, 100); // Test with $1.00
            if (result.success) {
                setSuccess(true);
                console.log('Payment successful:', result.payment);
            }
            else {
                throw new Error('Payment failed');
            }
        }
        catch (err) {
            setError(err instanceof Error ? err.message : 'Payment failed');
        }
        finally {
            setLoading(false);
        }
    };
    if (loading) {
        return _jsx("div", { className: "p-4", children: "Loading payment form..." });
    }
    if (error) {
        return _jsxs("div", { className: "p-4 text-red-600", children: ["Error: ", error] });
    }
    if (success) {
        return _jsx("div", { className: "p-4 text-green-600", children: "Payment successful!" });
    }
    return (_jsxs("div", { className: "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Test Payment" }), _jsx("div", { id: "card-container", className: "mb-4 p-4 border rounded" }), _jsx("button", { onClick: handlePayment, className: "w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors", disabled: loading, children: loading ? 'Processing...' : 'Pay $1.00' })] }));
}
