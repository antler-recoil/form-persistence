import { useState, useEffect } from 'react';

function readStoreValue (key, initialValue) {
    try {
        const item = window.localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
    } catch {
        console.warn('Could not read localStorage key', error);
        return initialValue;
    }
}

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => readStoreValue(key, initialValue));

    useEffect (() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
            console.warn("Could not write localStorage key")
        }
    }, [key, value]);

    return [value, setValue];
}
