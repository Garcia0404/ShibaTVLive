"use client";
import { useState, useEffect, useRef } from "react"

export function useSlider(length = 1, delay = 3000) {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const next = () => {
        setIndex((prev) => (prev + 1) % length);
        resetInterval();
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + length) % length);
        resetInterval();
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % length);
        }, delay);
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [length, delay]);

    return { index, next, prev };
}
