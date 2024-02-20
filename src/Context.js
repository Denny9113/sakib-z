import { useContext, createContext } from "react";

export const scrollContext = createContext({
    setComps:'',
    Comps: 'Hero',
    handleClick: () => { }
})

export const ScrollProvider = scrollContext.Provider

export default function useScroll(){
    return useContext(scrollContext)
}