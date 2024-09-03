import { create } from "zustand";

const useInfoModal = create((set) => ({
  isOpen: false,
  id: undefined,
  actions: {
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
    setId: (id) => set((state) => ({ id })),
  },
}));

export default useInfoModal;
