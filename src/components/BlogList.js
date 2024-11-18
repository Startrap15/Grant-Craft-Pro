import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import { fetchAllBlogPosts } from '../services/blogService';
import { BlogPost } from './BlogPost';
export function BlogList() {
    const { data: posts = [], isLoading, error } = useQuery({
        queryKey: ['blog-posts'],
        queryFn: fetchAllBlogPosts,
        staleTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
    if (isLoading) {
        return (_jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [...Array(3)].map((_, i) => (_jsxs("div", { className: "animate-pulse", children: [_jsx("div", { className: "bg-gray-200 h-48 rounded-t-lg" }), _jsxs("div", { className: "p-4 space-y-4", children: [_jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }), _jsx("div", { className: "h-4 bg-gray-200 rounded" }), _jsx("div", { className: "h-4 bg-gray-200 rounded w-5/6" })] })] }, i))) }));
    }
    if (error) {
        return (_jsxs("div", { className: "text-center py-8", children: [_jsx("p", { className: "text-gray-600", children: "Unable to load blog posts at the moment." }), _jsx("button", { onClick: () => window.location.reload(), className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", children: "Try Again" })] }));
    }
    if (posts.length === 0) {
        return (_jsx("div", { className: "text-center py-8", children: _jsx("p", { className: "text-gray-600", children: "No blog posts available at the moment." }) }));
    }
    return (_jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: posts.map((post) => (_jsx(BlogPost, { post: post }, `${post.source}-${post.id}`))) }));
}
