import Link from "next/link";
import { Mountain, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-white text-green-700 w-10 h-10 rounded-full flex items-center justify-center">
              <Mountain className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl">Eitan Pucon</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/tours" className="hover:text-green-200 transition-colors">
              טיולים
            </Link>
            <Link href="/transport" className="hover:text-green-200 transition-colors">
              תחבורה
            </Link>
            <Link href="/map" className="hover:text-green-200 transition-colors">
              מפה
            </Link>
            <Link href="/restaurants" className="hover:text-green-200 transition-colors">
              מסעדות
            </Link>
            <Link href="/bank" className="hover:text-green-200 transition-colors">
              כסף
            </Link>
            <Link href="/laundry" className="hover:text-green-200 transition-colors">
              מכבסות
            </Link>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/972533839795"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold">צרו קשר בוואטסאפ</span>
          </a>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-green-700">
          <p className="text-green-200">
            © {new Date().getFullYear()} Eitan Pucon - כל הזכויות שמורות
          </p>
          <p className="text-green-300 text-sm mt-2">
            פוקון, צ׳ילה 🇨🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
