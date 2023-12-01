import { create } from "zustand";
import { axiosHelper, tokenHelper } from "../helpers";

export const useConvoStore = create((set) => ({
  convos: [],

  getConvos: async (userId) => {
    set({ isLoading: true, errorMsg: null });
    try {
      console.log(userId);
      const response = await axiosHelper.post("/system/groupe/get", {
        idu: userId,
      });
      console.log(response.data.data);
      if (response.data.status === 200) {
        const convList = await Promise.all(
          response.data.data.map(async (item) => {
            const convResponse = await axiosHelper.post(
              "/system/conversation/get",
              {
                idconv: item.idconv,
              }
            );
            return convResponse.data.data[0];
          })
        );

        console.log(convList);
        set({ convos: convList });
      }
    } catch (error) {
      set({ errorMsg: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
