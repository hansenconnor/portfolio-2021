import create from 'zustand'

const useBlobMatPropStore = create(set => ({
    color: "#FFF",
    clearColor: "#FFF",
    waves: 5,
    speed: 10,
    setColor: color => set({ color: color }),
    setClearColor: clearColor => set(state => ({  clearColor })), // This line might not work...
    setWaves: waves => set({ waves: waves }),
    setSpeed: speed => set({ speed: speed })
}))

export default useBlobMatPropStore