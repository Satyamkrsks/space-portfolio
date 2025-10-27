"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionWarp() {
  const pathname = usePathname();

  useEffect(() => {
    // Trigger warp effect each time route changes
    (window as any).startWarp?.();
  }, [pathname]);

  return null;
}
