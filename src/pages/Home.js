import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import LatestPosts from '../components/LatestPosts';
export default function Home({ onConsultationClick }) {
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);
    return (_jsxs(_Fragment, { children: [_jsx(Hero, { onConsultationClick: onConsultationClick }), _jsx(Services, {}), _jsx(About, {}), _jsx(Testimonials, {}), _jsx(LatestPosts, {}), _jsx(Contact, {})] }));
}
