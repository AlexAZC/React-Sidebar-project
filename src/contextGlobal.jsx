import { createContext, useContext, useState } from "react";


const globalContext = createContext()

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(false)

        const openSidebar = () => {
            setIsSidebarOpen(true)
        };

        const closeSidebar = () => {
            setIsSidebarOpen(false)
        };

        const openModal = () => {
            setIsModalOpen(true)
        };

        const closeModal = () => {
            setIsModalOpen(false)
        };

    return <globalContext.Provider 
    value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
        }}>

        {children}
    </globalContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(globalContext)
}