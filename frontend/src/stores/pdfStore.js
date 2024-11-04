import { create } from 'zustand'

// Stores PDF at global level
const usePdfStore = create((set) => ({
    pdfs: [],
    addPdfs: (files) => set((state) => ( {pdfs: state.pdfs.concat(files)}))
}))

export { usePdfStore }