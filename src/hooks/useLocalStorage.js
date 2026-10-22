import { useState, useEffect } from "react";

function readStoredValue(key, initialValue) {
    try {
        const item = window.localStorage.getItem(key);
        return item != null ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.warn("Could not read localStorage key");
        return initialValue;
    }
}

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => readStoredValue(key, initialValue));

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warm("Could not write localStorage key");
        }
    }, [key, value]);

    return [value, setValue];
}
