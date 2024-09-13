import { create } from 'zustand';

interface MobileState {
    isMobileOpen: boolean;
    isSearchOpen: boolean;
    toggleMobile: () => void;
    toggleSearch: () => void;
}

const useMobileStore = create<MobileState>((set) => ({
    isMobileOpen: false,
    isSearchOpen: false,
    toggleMobile: () => set((prev) => ({ isMobileOpen: !prev.isMobileOpen })),
    toggleSearch: () => set((prev) => ({ isSearchOpen: !prev.isSearchOpen }))
}));

export default useMobileStore;
