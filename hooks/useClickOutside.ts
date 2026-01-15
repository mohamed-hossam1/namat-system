"use client";

import { useEffect } from "react";

type Options = {
  enabled?: boolean;
  closeOnEsc?: boolean;
};

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
  options: Options = {}
) {
  const { enabled = true, closeOnEsc = true } = options;

  useEffect(() => {
    if (!enabled) return;

    const onClick = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ref, handler, enabled, closeOnEsc]);
}
