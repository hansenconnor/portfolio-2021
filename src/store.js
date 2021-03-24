import create from 'zustand'

const useBlobMatPropStore = create(set => ({
    color: "rgba(0, 0, 255, 1)",
    testColor: "rgba(0, 0, 255, 1)",
    clearColor: "#FFFFFF",
    waves: 1,
    speed: 0.5,
}))

export default useBlobMatPropStore