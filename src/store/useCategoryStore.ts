import { create } from 'zustand';

interface CategoryState {
    category: string;
    setCategory: (newCategory: string) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
    category: 'general', // 기본값을 general로 설정한다.
    setCategory: (newCategory) => set({ category: newCategory })
}));

export default useCategoryStore;
