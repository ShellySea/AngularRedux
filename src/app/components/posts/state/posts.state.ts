export interface PostInterface {
    title: string;
    description: string;
    id?: number;
}

export interface PostsI {
    posts: PostInterface[]
}

export const initialPosts: PostsI = {
    posts: [
        {
            title: 'My title',
            description: 'desc1',
            id: 1
        },
        {
            title: 'My title2',
            description: 'desc2',
            id: 2
        }]
}