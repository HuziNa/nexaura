"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  Cloud,
  Smartphone,
  Globe,
  Database,
  Shield,
  ArrowRight,
  Users,
  ShoppingBag,
  Megaphone,
  Settings,
  Truck,
  BarChart3,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Account Setup & Registration",
      slug: "account-setup",
      description:
        "Get your seller accounts created correctly and compliant across major marketplaces so you can start selling fast.",
      features: [
        "Amazon Seller Central setup (FBA / FBM)",
        "Walmart Seller Center setup",
        "eBay seller account setup",
        "TikTok Shop seller account creation",
        "LLC / Ltd company formation (where applicable)",
        "EIN, tax & compliance assistance",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Product Listing & Store Management",
      slug: "product-listing",
      description:
        "Launch high-converting listings and keep your storefront healthy with daily operations managed for you.",
      features: [
        "Listing creation (titles, descriptions, keywords, SEO)",
        "High-quality images & A+ content",
        "Category approval & ungating (Amazon/Walmart)",
        "Storefront / brand store design",
        "Daily operations & order management",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Advertising & Marketing",
      slug: "advertising",
      description:
        "Drive targeted traffic with paid ads and creator-led campaigns tuned for marketplace performance.",
      features: [
        "Amazon PPC setup & optimization",
        "TikTok ads & influencer/affiliate marketing",
        "Walmart advertising (Walmart Connect)",
        "eBay promoted listings",
        "Social media ads linked to stores",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Optimization & Growth",
      slug: "optimization",
      description:
        "Improve rankings, conversions, and account health with continuous optimization and monitoring.",
      features: [
        "SEO for Amazon, Walmart, eBay",
        "Conversion rate optimization",
        "Review & rating management",
        "Account health monitoring & reinstatement",
        "Competitor & product research",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fulfillment & Logistics",
      slug: "fulfillment",
      description:
        "Keep inventory flowing and orders delivered on time with optimized fulfillment operations.",
      features: [
        "Amazon FBA inventory planning & management",
        "Walmart Fulfillment Services (WFS) assistance",
        "Multi-channel fulfillment (MCF) setups",
        "Return/refund handling",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Reporting & Scaling",
      slug: "reporting",
      description:
        "Track what matters and scale into new markets with clear insights and automation.",
      features: [
        "Sales reports & performance analytics",
        "ROI tracking",
        "Market expansion (cross-platform)",
        "Automation services for scaling",
      ],
      color: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            <span className="text-primary neon-text">Comprehensive</span> Tech
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology
            services that drive innovation and accelerate your digital
            transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group flex flex-col">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-black mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 group-hover:translate-x-1 transition-all duration-300 mt-4"
                    >
                      Learn More <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
