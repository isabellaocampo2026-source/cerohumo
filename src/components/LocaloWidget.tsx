"use client";

import { useEffect, useRef } from "react";

// Add TypeScript declaration for the global window object
declare global {
    interface Window {
        LOCALO_FREE_TOOL: {
            container: string;
            hidePoweredBy: boolean;
            token: string;
        };
    }
}

export default function LocaloWidget() {
    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current) return;

        // Localo configuration
        window.LOCALO_FREE_TOOL = {
            container: "#free-tool",
            hidePoweredBy: true,
            token: "nkrPLoxj7w-LKiqWJbC3nmJGHZYdFdELUqv7gRBmlpE",
        };

        // Inject the script dynamically
        const script = document.createElement("script");
        script.src = "https://jstools.localo.app/scripts/freetool.js";
        script.async = true;
        script.defer = true;

        // Only append if it doesn't exist to prevent duplicates in React StrictMode
        if (!document.querySelector(`script[src="${script.src}"]`)) {
            document.body.appendChild(script);
            isLoaded.current = true;
        }

        // Cleanup isn't strictly necessary for this widget and can sometimes break the iframe
        // so we just leave it injected.
    }, []);

    return (
        <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative dots in corners to make it feel integrated */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-200"></div>

            <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-2">
                    Audita el SEO Local de tu negocio gratis
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                    Busca tu negocio en el mapa y descubre cómo está posicionado en Google al instante.
                </p>
            </div>

            {/* The container where Localo injects the iframe */}
            <div
                id="free-tool"
                className="min-h-[400px] flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl"
            >
                <span className="animate-pulse flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Cargando auditoría...
                </span>
            </div>
        </div>
    );
}
