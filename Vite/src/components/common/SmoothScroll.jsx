import { useEffect } from "react";
import Lenis from "lenis";
import { useRouterState } from "react-router-dom";
export function SmoothScroll({ children }) {
    const location = useLocation();
  const pathname = location.pathname;
    useEffect(() => {
        // Only execute on browser client
        if (typeof window === "undefined")
            return;
        // Check for user reduced motion preference
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }
        const lenis = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.8,
            infinite: false,
        });
        let animationFrameId;
        function raf(time) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }
        animationFrameId = requestAnimationFrame(raf);
        // Reset scroll to top on route navigation
        lenis.scrollTo(0, { immediate: true });
        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, [pathname]);
    return <>{children}</>;
}
