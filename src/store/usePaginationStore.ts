// src/store/usePaginationStore.ts
import { create } from 'zustand';

interface PaginationState {
    page: number;
    pageSize: number;
    totalResults: number;
    setPage: (newPage: number) => void;
    setTotalResults: (total: number) => void;
}

const usePaginationStore = create<PaginationState>((set) => ({
    page: 1,
    pageSize: 3,
    totalResults: 0,
    setPage: (page) => set({ page }),
    setTotalResults: (totalResults) => set({ totalResults })
}));

export default usePaginationStore;
