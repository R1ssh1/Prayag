import { useState, useEffect } from "react";

/**
 * Tracks which section is currently active based on scroll position.
 * @param ids Array of HTML element IDs to track
 * @param offset px offset to trigger the active state earlier/later
 * @returns The currently active ID
 */
export function useScrollSpy(ids: string[], offset = 150): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // If no IDs provided, do nothing
    if (ids.length === 0) return;

    const handleScroll = () => {
      let currentActiveId = "";
      
      // Iterate through all sections
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is above the viewport + offset
          if (rect.top <= offset) {
            currentActiveId = id;
          }
        }
      }

      // If we haven't scrolled past the first element yet, 
      // optionally set the first element as active.
      if (!currentActiveId && ids.length > 0) {
        const firstEl = document.getElementById(ids[0]);
        if (firstEl && firstEl.getBoundingClientRect().top > offset) {
          currentActiveId = ids[0];
        }
      }

      if (currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset, activeId]);

  return activeId;
}
