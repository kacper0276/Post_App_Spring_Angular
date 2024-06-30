export interface IPost {
  id: number;
  title: string;
  image: string;
  content: string;
  created: Date;
  likes: number;
  comments: string[];
  author: string;
  user: number;
  userProfileImage: string;
}
