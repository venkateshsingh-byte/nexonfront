"use client";
import { useEffect } from "react";

export default function BlockJQueryCDN() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLScriptElement &&
            node.src === "http://code.jquery.com/jquery-3.7.1.min.js" // unwanted URL
          ) {
            node.remove();
            console.log("Unwanted jQuery CDN removed:", node.src);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
