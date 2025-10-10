import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#001931" }}>
      <div className="container mx-auto px-6 lg:px-20 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-10 md:text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-2xl font-extrabold">APPS GALAXY</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Premium apps crafted with care for performance and design.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-4 text-white/80">
              Product
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/apps" className="hover:text-white hover:underline">
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-white hover:underline"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-4 text-white/80">
              Company
            </h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white hover:underline hover:cursor-pointer">
                About
              </li>
              <li className="hover:text-white hover:underline hover:cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-2 text-white/80">
              Follow Us
            </h4>
            <p className="text-sm text-white/70 mb-2">
              Join our community and stay connected.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                className="btn btn-ghost btn-circle border border-white/20 hover:border-white/60"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="btn btn-ghost btn-circle border border-white/20 hover:border-white/60"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="btn btn-ghost btn-circle border border-white/20 hover:border-white/60"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-4 py-4">
          <p className="text-center text-sm sm:text-base text-white/70">
            © 2025 APPS GALAXY — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
