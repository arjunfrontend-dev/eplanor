"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Zap,
  ChevronDown,
  Info,
  Box,
  Wrench,
  Briefcase,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, services } from "@/lib/data";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { name: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
    {
      name: "Products",
      href: "/products",
      icon: <Box className="w-4 h-4" />,
      hasDropdown: true,
    },
    {
      name: "Services",
      href: "/services",
      icon: <Wrench className="w-4 h-4" />,
      hasDropdown: true,
    },
    {
      name: "Careers",
      href: "/careers",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold text-[#0A192F]">eplanor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && handleDropdownEnter(item.name)
                }
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-[#6B7280] hover:text-[#2563EB] transition-colors duration-200 font-medium"
                >
                  <span className="w-5 h-4">{item.icon}</span>
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-2 border-b border-gray-100">
                      <Link
                        href={item.href}
                        className="block text-sm font-semibold text-[#1F2937] hover:text-[#2563EB] transition-colors"
                      >
                        {item.name} Overview
                      </Link>
                    </div>
                    <div className="py-2">
                      {item.name === "Products" &&
                        products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="block px-4 py-2 text-sm text-[#6B7280] hover:text-[#2563EB] hover:bg-gray-50 transition-colors"
                          >
                            {product.name}
                          </Link>
                        ))}
                      {item.name === "Services" &&
                        services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2 text-sm text-[#6B7280] hover:text-[#2563EB] hover:bg-gray-50 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-2xl shadow-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[#6B7280] hover:text-[#2563EB] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full gradient-bg text-white rounded-2xl">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
