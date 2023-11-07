import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from "zustand"

interface UserStore {
  userInfo: any;
  updateUser: (newUserInfo: any) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: null,
      updateUser: (newUserInfo: any) => {
        set((state: any) => {
          return { userInfo: newUserInfo ? {...newUserInfo}: null };
        });
      }
    }),
    {
      name: 'post-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)