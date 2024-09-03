import { create } from "zustand";

const useGroupModal = create((set) => ({
  isOpen: false,
  actions: {
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  },
}));

export default useGroupModal;
