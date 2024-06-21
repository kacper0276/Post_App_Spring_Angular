export interface IPost {
  id: number;
  title: string;
  image: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: string[];
  author: string;
  user: number;
}
