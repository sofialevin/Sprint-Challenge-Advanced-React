import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useFavorites = () => {
    const [ favorites, setFavorites ] = useLocalStorage(false);
    return [ favorites, setFavorites];
}