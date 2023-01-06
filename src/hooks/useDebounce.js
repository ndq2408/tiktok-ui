import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDounceValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
