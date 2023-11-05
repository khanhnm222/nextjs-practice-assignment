export interface PostSection {
  title: string;
  subTitle?: string;
  author: string;
  createdDate: string;
}

export interface Post {
  id: string | number;
  title: string;
  subTitle?: string;
  author: string;
  createdDate: string;
  description?: string;
}