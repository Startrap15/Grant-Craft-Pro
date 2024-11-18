import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fetchAllBlogPosts } from '../services/blogService';
import { BlogPost } from './BlogPost';
export default function LatestPosts() {
    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['blog-posts'],
        queryFn: fetchAllBlogPosts,
        staleTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
    const latestPosts = posts.slice(0, 3);
    if (isLoading) {
        return (_jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Latest Insights" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Stay updated with our latest grant writing tips and success stories" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [...Array(3)].map((_, i) => (_jsxs("div", { className: "animate-pulse", children: [_jsx("div", { className: "bg-gray-200 h-48 rounded-t-lg" }), _jsxs("div", { className: "p-4 space-y-4", children: [_jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }), _jsx("div", { className: "h-4 bg-gray-200 rounded" }), _jsx("div", { className: "h-4 bg-gray-200 rounded w-5/6" })] })] }, i))) })] }) }));
    }
    if (latestPosts.length === 0) {
        return null;
    }
    return (_jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Latest Insights" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Stay updated with our latest grant writing tips and success stories" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: latestPosts.map((post) => (_jsx(BlogPost, { post: post }, `${post.source}-${post.id}`))) }), _jsx("div", { className: "text-center", children: _jsxs(Link, { to: "/blog", className: "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", children: ["View All Posts", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }) }));
}
