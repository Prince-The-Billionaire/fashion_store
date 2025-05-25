// components/Footer.tsx
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest">ZAP FASHION</h2>
          <p className="text-sm text-white/60 mt-2">
            Your taste. Your story. Your fashion.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/category/corporate">Corporate</Link></li>
            <li><Link href="/category/ankara">Ankara</Link></li>
            <li><Link href="/category/casual">Casual</Link></li>
            <li><Link href="/category/christmas">Christmas</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaTiktok size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/50 text-center">
        &copy; {new Date().getFullYear()} ZAP Fashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
