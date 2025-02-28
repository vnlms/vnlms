import {create} from "zustand";

type ConfettiStoreState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};
export const useConfettiStore = create<ConfettiStoreState>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
