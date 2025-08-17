import { RefObject, useEffect } from "react";

export const useFitTextScaleX = (
  containerRef: RefObject<HTMLElement>,
  textRef: RefObject<HTMLElement>,
  iconRef?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const container = containerRef.current;
    const text = textRef.current;

    const resizeText = () => {
      text.style.transform = "scaleX(1)";
      text.style.transformOrigin = "left";

      const containerRect = container.getBoundingClientRect();
      const textRect = text.getBoundingClientRect();

      let maxWidth = containerRect.width;

      if (iconRef?.current) {
        const iconRect = iconRef.current.getBoundingClientRect();
        const distanceToIcon = iconRect.left - textRect.left;
        maxWidth = Math.min(maxWidth, distanceToIcon);
      }

      const scale = maxWidth / textRect.width;

      if (scale < 1) {
        text.style.transform = `scaleX(${scale})`;
      }
    };

    const resizeObserver = new ResizeObserver(resizeText);
    resizeObserver.observe(container);
    resizeObserver.observe(text);
    if (iconRef?.current) resizeObserver.observe(iconRef.current);

    const mutationObserver = new MutationObserver(resizeText);
    mutationObserver.observe(text, {
      characterData: true,
      subtree: true,
      childList: true,
    });

    window.addEventListener("resize", resizeText);
    resizeText();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", resizeText);
    };
  }, [containerRef, textRef, iconRef]);
};
