export interface userTest {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export interface test {
  id: number;
  name: string;
  img: string;
  description: string;
  like: number;
  comments: string[];
  author: string;
}
