import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useFavorites = () => {
    const [ favorites, setFavorites ] = useLocalStorage([]);

    useEffect(() => {
        const cards = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [favorites])

    return [ favorites, setFavorites];
}