import { Post, PostSection } from "@/app/utils/models/Post";
import { create } from "zustand";


interface PostStore {
  posts: Post[];
  addPost: (newPost: PostSection) => void;
}

export const usePostsStore = create<PostStore>((set) => ({
  posts: [
    {
      id: 1,
      title: 'Man must explore, and this is exploration at its greatest',
      subTitle: 'Problems look mighty small from 150 miles up',
      author: 'Start Bootstrap',
      createdDate: 'September 24, 2014'
    }
  ],
  addPost: (newPost: any) => {
    set((state: any) => {
      return { posts: [...state.posts, newPost] };
    });
  }
}))