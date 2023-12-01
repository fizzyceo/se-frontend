import { create } from "zustand";
import { axiosHelper, tokenHelper } from "../helpers";

export const useFeedStore = create((set) => ({
  eeds: [],

  getfeeds: async (userId) => {
    set({ isLoading: true, errorMsg: null });
    try {
      console.log(userId);
      const response = await axiosHelper.post("/system/publication/get", {
        iduser: userId,
      });
      console.log(response);
      if (response.data.status === 200) {
        set({ feeds: response.data.data });
      }
    } catch (error) {
      set({ errorMsg: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
