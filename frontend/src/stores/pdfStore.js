import { create } from 'zustand'

// Stores PDF at global level
const usePdfStore = create((set) => ({
    pdfs: [],
    reponseDetails: [],
    addPdfs: (files) => set((state) => ( {pdfs: state.pdfs.concat(files)})),
    addRespDetails: (response) => set((state) => ({responseDetails: state.reponseDetails.concat(response)}))
}))

export { usePdfStore }