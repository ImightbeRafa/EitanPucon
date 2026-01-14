import { MapPin, ExternalLink } from "lucide-react";

interface MapLinkProps {
  url: string;
  label: string;
}

export default function MapLink({ url, label }: MapLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors"
    >
      <MapPin className="w-5 h-5" />
      <span className="flex-grow">{label}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}
