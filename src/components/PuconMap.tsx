"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  id: string;
  name: string;
  category: string;
  description: string;
  lat: number;
  lng: number;
  color: string;
  mapsUrl?: string;
}

interface PuconMapProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelectLocation: (location: Location | null) => void;
}

export default function PuconMap({ locations, selectedLocation, onSelectLocation }: PuconMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Initialize map centered on Pucon
    mapRef.current = L.map(containerRef.current, {
      center: [-39.2823, -71.9545],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    // Add OpenStreetMap tiles with a cleaner style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers when locations change
  useEffect(() => {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    locations.forEach(location => {
      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background-color: ${location.color};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.2s;
          "></div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = L.marker([location.lat, location.lng], { icon: markerIcon })
        .addTo(mapRef.current!)
        .on('click', () => {
          onSelectLocation(location);
        });

      // Add tooltip
      marker.bindTooltip(location.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
        className: 'custom-tooltip'
      });

      markersRef.current.push(marker);
    });
  }, [locations, onSelectLocation]);

  // Pan to selected location
  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.setView([selectedLocation.lat, selectedLocation.lng], 16, {
        animate: true,
        duration: 0.5
      });
    }
  }, [selectedLocation]);

  return (
    <>
      <style jsx global>{`
        .custom-tooltip {
          background: #1c1917;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 500;
          padding: 6px 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .custom-tooltip::before {
          border-top-color: #1c1917 !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        .leaflet-control-zoom a {
          background: white !important;
          color: #44403c !important;
          border: none !important;
        }
        .leaflet-control-zoom a:hover {
          background: #f5f5f4 !important;
        }
      `}</style>
      <div 
        ref={containerRef} 
        className="h-[500px] w-full"
        style={{ background: '#fafaf9' }}
      />
    </>
  );
}
