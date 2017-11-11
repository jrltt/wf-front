import { IPost } from './posts';

export class Post implements IPost {
    id: number;
    title: string;
    content: string;
    lat: number;
    long: number;
    image_url: string;
}
