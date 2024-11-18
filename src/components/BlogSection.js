import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from 'react-query';
import { ExternalLink } from 'lucide-react';
import { fetchAllBlogPosts } from '../services/blogService';
export default function BlogSection() {
    const { data: posts, isLoading, error } = useQuery('blog-posts', fetchAllBlogPosts);
    if (isLoading) {
        return (_jsxs("div", { className: "animate-pulse", children: [_jsx("div", { className: "h-64 bg-gray-200 rounded-lg mb-4" }), _jsx("div", { className: "h-64 bg-gray-200 rounded-lg mb-4" }), _jsx("div", { className: "h-64 bg-gray-200 rounded-lg" })] }));
    }
    if (error) {
        return (_jsx("div", { className: "text-center py-12", children: _jsx("p", { className: "text-red-600", children: "Error loading blog posts. Please try again later." }) }));
    }
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Latest Insights" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts?.map((post) => (_jsxs("article", { className: "bg-white rounded-xl shadow-sm overflow-hidden", children: [post.image && (_jsx("img", { src: post.image, alt: post.title, className: "w-full h-48 object-cover" })), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-2", children: [_jsx("span", { className: "text-sm text-blue-600 font-medium capitalize", children: post.source }), _jsx("span", { className: "mx-2 text-gray-300", children: "\u2022" }), _jsx("time", { className: "text-sm text-gray-500", children: new Date(post.date).toLocaleDateString() })] }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: post.title }), _jsx("p", { className: "text-gray-600 mb-4", children: post.excerpt }), _jsxs("a", { href: post.link, className: "inline-flex items-center text-blue-600 hover:text-blue-700", target: "_blank", rel: "noopener noreferrer", children: ["Read more", _jsx(ExternalLink, { className: "h-4 w-4 ml-1" })] })] })] }, post.id))) })] }) }));
}
