/**
 * Layout Component - Neural Network Aesthetic
 * 
 * Design Philosophy:
 * - Deep space background with subtle gradient
 * - Glassmorphism navigation bar
 * - Cyan/Purple gradient accents
 * - Smooth transitions and hover effects
 */

import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/findings", label: "研究发现", labelEn: "Findings" },
  { href: "/papers", label: "论文汇总", labelEn: "Papers" },
  { href: "/about", label: "关于", labelEn: "About" },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-card border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gradient font-[var(--font-display)]">
                  AI Psychology
                </span>
                <span className="block text-xs text-muted-foreground -mt-1">
                  Research Hub
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                  {location === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-card border-t border-border/50"
            >
              <div className="container py-4 space-y-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`block px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                        location === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs ml-2 opacity-60">
                        {item.labelEn}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-border/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-gradient">
                  AI Psychology
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                探索人工智能与心理学的交汇点，了解AI如何影响人类认知、情感与行为的最新研究进展。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">快速链接</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Info */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">研究信息</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>收录论文: 17篇</li>
                <li>研究时间: 2024-2026</li>
                <li>数据来源: Nature, Science, JMIR等</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="section-divider mt-8 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 AI Psychology Research Hub. 基于公开学术研究整理。</p>
            <p>
              Powered by{" "}
              <span className="text-gradient font-medium">Manus AI</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
