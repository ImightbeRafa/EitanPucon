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

    // Initialize map centered on Pucon downtown
    mapRef.current = L.map(containerRef.current, {
      center: [-39.2745, -71.9735],
      zoom: 16,
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

      // Add rich tooltip with info card
      const tooltipContent = `
        <div style="min-width: 180px; padding: 4px 0;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: ${location.color};"></div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #a8a29e;">${location.category}</span>
          </div>
          <div style="font-size: 15px; font-weight: 600; color: #1c1917; margin-bottom: 4px;">${location.name}</div>
          <div style="font-size: 13px; color: #78716c;">${location.description}</div>
          ${location.mapsUrl ? '<div style="font-size: 11px; color: #0891b2; margin-top: 6px;">לחץ לניווט →</div>' : ''}
        </div>
      `;
      
      marker.bindTooltip(tooltipContent, {
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
          background: white;
          border: none;
          border-radius: 12px;
          color: #1c1917;
          font-weight: 400;
          padding: 12px 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          font-family: inherit;
          max-width: 250px;
        }
        .custom-tooltip::before {
          border-top-color: white !important;
        }
        .leaflet-tooltip-top:before {
          border-top-color: white !important;
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
