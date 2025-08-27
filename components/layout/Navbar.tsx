"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Box,
  Wrench,
  Info,
  Mail,
  Briefcase,
  HelpCircle,
  FileText,
  Code,
  Users,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    // { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "About",
      href: "/eplanor/about",
      icon: <Info className="w-4 h-4" />,
    },

    {
      name: "Products",
      href: "#",
      icon: <Box className="w-4 h-4" />,
      dropdown: [
        { name: "Overview", href: "/products/product-a" },
        { name: "Blaze LMS", href: "/products/product-b" },
        { name: "CyberCop", href: "/products/product-a" },
        { name: "eCommerce", href: "/products/product-b" },
      ],
    },
    {
      name: "Services",
      href: "#",
      icon: <Wrench className="w-4 h-4" />,
      dropdown: [
        {
          name: "Services Overview",
          href: "/services/service-a",
          icon: <Code className="w-4 h-4" />,
        },
        {
          name: "Cloud Solutions",
          href: "/services/service-b",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Cybersecurity",
          href: "/services/service-b",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Apps Development",
          href: "/services/service-b",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Resource Planning",
          href: "/services/service-b",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Contract Staffing",
          href: "/services/service-b",
          icon: <Users className="w-4 h-4" />,
        },
      ],
    },
    // { name: "Case Studies", href: "/case-studies", icon: <FileText className="w-4 h-4" /> },
    {
      name: "Careers",
      href: "/eplanor/careers",
      icon: <Briefcase className="w-4 h-4" />,
    },
    // { name: "FAQ", href: "/faq", icon: <HelpCircle className="w-4 h-4" /> },
    {
      name: "Contact",
      href: "/eplanor/contact",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="./assets/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-xl font-bold">eplanor</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6" ref={dropdownRef}>
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition"
              >
                {item.icon} {item.name}
              </a>

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-2 backdrop-blur-xl"
                  >
                    {item.dropdown.map((drop) => (
                      <a
                        key={drop.name}
                        href={drop.href}
                        className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        {drop.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 py-2 font-medium"
                >
                  {item.icon} {item.name}
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
