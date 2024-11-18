import axios from 'axios';
const MEDIUM_TOKEN = import.meta.env.VITE_MEDIUM_API_TOKEN;
const MEDIUM_USER_ID = import.meta.env.VITE_MEDIUM_USER_ID;
export async function fetchMediumPosts() {
    if (!MEDIUM_TOKEN || !MEDIUM_USER_ID) {
        console.log('Medium API not configured');
        return [];
    }
    try {
        const response = await axios.get(`https://api.medium.com/v1/users/${MEDIUM_USER_ID}/posts`, {
            headers: {
                'Authorization': `Bearer ${MEDIUM_TOKEN}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data.data.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.content.substring(0, 150) + '...',
            content: post.content,
            date: post.publishedAt,
            link: post.url,
            image: post.previewImage,
            source: 'medium'
        }));
    }
    catch (error) {
        console.log('Medium fetch error:', error instanceof Error ? error.message : 'Unknown error');
        return [];
    }
}
