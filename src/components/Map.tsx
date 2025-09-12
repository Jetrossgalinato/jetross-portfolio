"use client";
import { useEffect, useRef, useState } from "react";

interface MapComponentProps {
  latitude?: number;
  longitude?: number;
  location?: string;
  timezone?: string;
  height?: string;
}

export default function MapComponent({
  latitude = 8.93,
  longitude = 125.53,
  location = "Ampayon, Butuan City, Philippines",
  timezone = "Philippine Time",
  height = "h-48",
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila", // Changed from UTC to Philippine timezone
      });
      setCurrentTime(`${timeString} PHT`); // Changed from UTC to PHT
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only initialize map on client side
    if (!isClient || !mapRef.current || mapInstanceRef.current) return;

    // Dynamic import of Leaflet
    import("leaflet").then((leafletModule) => {
      const L = leafletModule.default || leafletModule;

      // Import CSS
      import("leaflet/dist/leaflet.css");

      // Fix for default markers in Next.js
      delete (L.Icon.Default.prototype as L.Icon & { _getIconUrl?: unknown })
        ._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Initialize the map
      const map = L.map(mapRef.current!, {
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
      }).setView([latitude, longitude], 13);

      mapInstanceRef.current = map;

      // Add standard OpenStreetMap tiles (light theme only)
      tileLayerRef.current = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: "© OpenStreetMap contributors",
        }
      ).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        html: '<div style="background: #ef4444; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
        className: "custom-marker",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      // Add marker
      L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

      // Add a subtle circle around the location
      L.circle([latitude, longitude], {
        color: "#ef4444",
        fillColor: "#ef4444",
        fillOpacity: 0.1,
        radius: 500,
        weight: 2,
      }).addTo(map);
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient, latitude, longitude]);

  // Extract city and country from location
  const getLocationText = (): string => {
    const parts = location.split(", ");
    if (parts.length >= 2) {
      return parts.slice(-2).join(", ");
    }
    return location;
  };

  // Show loading placeholder until client-side
  if (!isClient) {
    return (
      <div className="mb-8">
        <div
          className={`relative ${height} w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
        >
          <div className="animate-pulse text-gray-500 dark:text-gray-400">
            Loading map...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div
        className={`relative ${height} w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg`}
        style={{ isolation: "isolate" }}
      >
        {/* Map Container - Base layer with explicit z-index */}
        <div
          ref={mapRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        ></div>

        {/* Location Text - Top Left overlay */}
        <div
          className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-sm transition duration-300"
          style={{ zIndex: 1000 }}
        >
          📍 {getLocationText()}
        </div>

        {/* Time Text - Top Right overlay */}
        <div
          className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-sm transition duration-300"
          style={{ zIndex: 1000 }}
        >
          🕒 {currentTime}
        </div>

        {/* Transparent Fade at Bottom overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/70 to-transparent dark:from-gray-900/70 pointer-events-none transition duration-300"
          style={{ zIndex: 999 }}
        ></div>
      </div>
    </div>
  );
}
