import { create } from "zustand"

interface UserStore {
  userInfo: any;
  updateUser: (newUserInfo: any) => void;
}

export const usePostsStore = create<UserStore>((set) => ({
  userInfo: {
    id: 1,
    username: 'Admin'
  },
  updateUser: (newUserInfo: any) => {
    set((state: any) => {
      return { userInfo: {...newUserInfo} };
    });
  }
}))