import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll<T extends HTMLElement>(
  itemsLength: number,
  options?: IntersectionObserverInit,
  delayStep = 100
) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(itemsLength).fill(false)
  );

  const itemsRef = useRef<(T | null)[]>([]);

  useEffect(() => {
    const observers = itemsRef.current.map((item, index) => {
      if (!item) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * delayStep);
          }
        },
        options ?? { threshold: 0.1 }
      );

      observer.observe(item);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [itemsLength, delayStep, options]);

  return {
    visibleItems,
    itemsRef,
  };
}
