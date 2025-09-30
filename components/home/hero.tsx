"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col w-full max-w-full">
        {/* Sophisticated Professional Tech Background */}
        <div className="absolute inset-0 z-0">
          {/* Elegant Grid System */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
                animation: "subtle-grid-move 25s linear infinite",
              }}
            ></div>
          </div>

          {/* Professional Circuit Network */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="pro-circuit-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(0, 212, 255)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(0, 150, 200)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(0, 102, 255)"
                  stopOpacity="0.6"
                />
              </linearGradient>

              <filter
                id="subtle-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Clean, Minimal Circuit Paths */}
            <path
              d="M0,200 L400,200 L450,150 L800,150"
              stroke="url(#pro-circuit-gradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#subtle-glow)"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1500;1500,0;0,1500"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M1200,350 L800,350 L750,300 L400,300"
              stroke="url(#pro-circuit-gradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#subtle-glow)"
            >
              <animate
                attributeName="stroke-dasharray"
                values="1500,0;0,1500;1500,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M400,500 L600,500 L650,550 L1000,550"
              stroke="url(#pro-circuit-gradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#subtle-glow)"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1500;1500,0;0,1500"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>

            {/* Vertical Connections - Minimal */}
            <path
              d="M400,200 L400,300"
              stroke="url(#pro-circuit-gradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M800,150 L800,350"
              stroke="url(#pro-circuit-gradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />

            {/* Sophisticated Circuit Nodes */}
            <circle
              cx="450"
              cy="150"
              r="5"
              fill="rgba(0, 212, 255, 0.7)"
              filter="url(#subtle-glow)"
            >
              <animate
                attributeName="r"
                values="5;8;5"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="650" cy="550" r="6" fill="rgba(0, 150, 200, 0.8)">
              <animate
                attributeName="r"
                values="6;9;6"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Data Flow - Subtle */}
            <rect
              x="430"
              y="140"
              width="40"
              height="20"
              rx="10"
              fill="rgba(0, 212, 255, 0.3)"
              filter="url(#subtle-glow)"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>

          {/* Premium Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animation: `elegant-float ${
                    8 + Math.random() * 4
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  boxShadow: "0 0 4px rgba(0, 212, 255, 0.4)",
                }}
              ></div>
            ))}
          </div>

          {/* Subtle Energy Flows */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-full top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-[professional-wave_8s_ease-in-out_infinite]"></div>
            <div className="absolute -right-full top-2/3 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[professional-wave_12s_ease-in-out_infinite]"></div>
          </div>

          {/* Premium Holographic Layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent animate-pulse"></div>

          {/* Executive Corner Elements */}
          <div
            className="absolute top-12 left-12 w-20 h-20 border-l-2 border-t-2 border-primary/30"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>
          <div
            className="absolute top-12 right-12 w-20 h-20 border-r-2 border-t-2 border-accent/30"
            style={{
              background:
                "linear-gradient(225deg, rgba(0, 102, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>
          <div
            className="absolute bottom-12 left-12 w-20 h-20 border-l-2 border-b-2 border-primary/30"
            style={{
              background:
                "linear-gradient(45deg, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>
          <div
            className="absolute bottom-12 right-12 w-20 h-20 border-r-2 border-b-2 border-accent/30"
            style={{
              background:
                "linear-gradient(315deg, rgba(0, 102, 255, 0.1) 0%, transparent 50%)",
            }}
          ></div>

          {/* Depth Layers for Professional Look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

          {/* Subtle Central Focus */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 102, 255, 0.05) 40%, transparent 70%)",
              animation: "subtle-core-pulse 10s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col max-w-full overflow-x-hidden">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Welcome to{" "}
                <strong className="text-primary neon-text">NEXURA</strong>{" "}
                <br />
                <span className="text-muted-foreground">Where</span>{" "}
                <strong className="text-accent">Future</strong>{" "}
                <em className="italic text-primary">Meets Innovation</em>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6 pt-6"
            >
              <div className="flex items-center justify-center">
                <a href="#contact">
                  <div className="group cursor-pointer neon-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:neon-glow transition-all duration-300">
                    <div className="bg-gradient-to-r from-primary to-accent h-[40px] rounded-full flex items-center justify-center text-black neon-glow">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <Sparkles className="h-4 w-4" />
                        Start Your Journey
                      </p>
                    </div>
                    <div className="text-primary group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 neon-border">
                      <ArrowRight className="h-3 w-3 group-hover:rotate-180 ease-in-out transition-all" />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
