import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { format, addDays, isWeekend } from 'date-fns';
import { sendConsultationEmail } from '../services/email';
export default function ConsultationModal({ isOpen, onClose }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: ''
    });
    const availableTimes = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];
    const nextFiveWorkDays = Array.from({ length: 10 }, (_, i) => {
        const date = addDays(new Date(), i);
        return !isWeekend(date) ? date : null;
    }).filter((date) => date !== null).slice(0, 5);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };
    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            message: ''
        });
        setSelectedDate(null);
        setSelectedTime('');
        setError(null);
        setShowConfirmation(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            await sendConsultationEmail({
                ...formData,
                date: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : undefined,
                time: selectedTime
            });
            setShowConfirmation(true);
        }
        catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to send request');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleConfirmationClose = () => {
        resetForm();
        onClose();
    };
    if (showConfirmation) {
        return (_jsxs(Dialog, { as: "div", className: "relative z-50", open: true, onClose: handleConfirmationClose, children: [_jsx("div", { className: "fixed inset-0 bg-black/25 backdrop-blur-sm" }), _jsx("div", { className: "fixed inset-0 overflow-y-auto", children: _jsx("div", { className: "flex min-h-full items-center justify-center p-4", children: _jsxs(Dialog.Panel, { className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all", children: [_jsx(Dialog.Title, { className: "text-lg font-medium leading-6 text-gray-900 mb-4", children: "Thank you! Your consultation request has been sent. We will contact you shortly." }), _jsx("button", { onClick: handleConfirmationClose, className: "inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", children: "OK" })] }) }) })] }));
    }
    return (_jsx(Transition, { appear: true, show: isOpen, as: Fragment, children: _jsxs(Dialog, { as: "div", className: "relative z-50", onClose: onClose, children: [_jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-black/25 backdrop-blur-sm" }) }), _jsx("div", { className: "fixed inset-0 overflow-y-auto", children: _jsx("div", { className: "flex min-h-full items-center justify-center p-4", children: _jsx(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: _jsxs(Dialog.Panel, { className: "w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all", children: [_jsxs("div", { className: "flex justify-between items-center p-6 bg-blue-600", children: [_jsx(Dialog.Title, { className: "text-xl font-semibold text-white", children: "Schedule Your Free Consultation" }), _jsx("button", { onClick: onClose, className: "text-white hover:text-blue-100 transition-colors", children: _jsx(X, { className: "h-6 w-6" }) })] }), error && (_jsx("div", { className: "p-4 bg-red-50 border-l-4 border-red-500", children: _jsx("p", { className: "text-red-700", children: error }) })), _jsxs("form", { onSubmit: handleSubmit, className: "p-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Select a Date & Time (PST)" }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "grid grid-cols-1 gap-4", children: nextFiveWorkDays.map((date) => (_jsx("button", { type: "button", onClick: () => setSelectedDate(date), className: `p-4 rounded-lg border-2 text-left hover:border-blue-500 transition-colors ${selectedDate?.toDateString() === date.toDateString()
                                                                                ? 'border-blue-600 bg-blue-50'
                                                                                : 'border-gray-200'}`, children: _jsxs("div", { className: "flex items-center", children: [_jsx(Calendar, { className: "h-5 w-5 text-blue-600 mr-3" }), _jsx("span", { children: format(date, 'EEEE, MMMM d') })] }) }, date.toISOString()))) }), selectedDate && (_jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "text-sm font-medium text-gray-700 mb-3", children: "Available Times (PST)" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: availableTimes.map((time) => (_jsxs("button", { type: "button", onClick: () => setSelectedTime(time), className: `p-2 rounded-lg border text-sm hover:border-blue-500 transition-colors flex items-center justify-center ${selectedTime === time
                                                                                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                                                        : 'border-gray-200'}`, children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), time] }, time))) })] }))] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Your Information" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name *" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, className: "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email *" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone (Optional)" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleInputChange, className: "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "organization", className: "block text-sm font-medium text-gray-700", children: "Organization" }), _jsx("input", { type: "text", id: "organization", name: "organization", value: formData.organization, onChange: handleInputChange, className: "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Tell us about your project *" }), _jsx("textarea", { id: "message", name: "message", rows: 4, value: formData.message, onChange: handleInputChange, className: "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", placeholder: "Please describe your funding needs and goals", required: true })] })] })] })] }), _jsx("div", { className: "mt-8", children: _jsx("button", { type: "submit", disabled: isSubmitting || !selectedDate || !selectedTime, className: "w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? 'Sending...' : 'Schedule Consultation' }) })] })] }) }) }) })] }) }));
}
