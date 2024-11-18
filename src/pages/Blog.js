import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlogList } from '../components/BlogList';
export default function Blog() {
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Latest Blog Posts" }), _jsx(BlogList, {})] }));
}
