import { useContext } from 'react';
import { AppContext } from '../pages/Posts';

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContext.Provider');
    }
    return context;
};