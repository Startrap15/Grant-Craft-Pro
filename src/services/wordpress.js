import axios from 'axios';
const WORDPRESS_API = import.meta.env.VITE_WORDPRESS_API_URL;
const USERNAME = import.meta.env.VITE_WORDPRESS_USERNAME;
const APP_PASSWORD = import.meta.env.VITE_WORDPRESS_APP_PASSWORD;
export async function fetchWordPressPosts() {
    if (!WORDPRESS_API) {
        console.log('WordPress API not configured');
        return [];
    }
    try {
        const response = await axios.get(`${WORDPRESS_API}/posts`, {
            params: {
                _embed: 'wp:featuredmedia',
                per_page: 10,
                status: 'publish'
            },
            auth: USERNAME && APP_PASSWORD ? {
                username: USERNAME,
                password: APP_PASSWORD
            } : undefined
        });
        return response.data.map(post => ({
            id: String(post.id),
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
            content: post.content.rendered,
            date: post.date,
            link: post.link,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
            source: 'wordpress'
        }));
    }
    catch (error) {
        console.log('WordPress fetch error:', error instanceof Error ? error.message : 'Unknown error');
        return [];
    }
}
