import axios from 'axios';
const GHOST_URL = import.meta.env.VITE_GHOST_URL;
const GHOST_KEY = import.meta.env.VITE_GHOST_CONTENT_KEY;
export async function fetchGhostPosts() {
    if (!GHOST_URL || !GHOST_KEY) {
        console.log('Ghost API not configured');
        return [];
    }
    try {
        const response = await axios.get(`${GHOST_URL}/ghost/api/v3/content/posts/`, {
            params: {
                key: GHOST_KEY,
                include: 'feature_image',
                limit: 10
            }
        });
        return response.data.posts.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            content: post.html,
            date: post.published_at,
            link: post.url,
            image: post.feature_image || undefined,
            source: 'ghost'
        }));
    }
    catch (error) {
        console.log('Ghost fetch error:', error instanceof Error ? error.message : 'Unknown error');
        return [];
    }
}
