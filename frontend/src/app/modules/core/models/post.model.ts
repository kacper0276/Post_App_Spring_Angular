import { IComment } from './comment.model';

export interface IPost {
  id: number;
  title: string;
  image: string;
  content: string;
  created: Date;
  likes: number;
  comments: IComment[];
  author: string;
  user: number;
  userProfileImage: string;
}
