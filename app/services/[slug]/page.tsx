"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, ShoppingBag, Megaphone, Settings, Truck, BarChart3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  description: string;
  detailContent: {
    subtitle: string;
    overview: string;
    features: {
      name: string;
      description: string;
    }[];
  };
}

const serviceDetails: Record<string, ServiceDetail> = {
  "account-setup": {
    title: "Account Setup & Registration",
    icon: <Users className="h-12 w-12" />,
    description: "Get your seller accounts created correctly and compliant across major marketplaces so you can start selling fast.",
    detailContent: {
      subtitle: "Account Setup & Registration",
      overview: "Getting your seller account up and running is the foundation of your e-commerce journey. We handle the technical details so you can focus on your products.",
      features: [
        {
          name: "Amazon Seller Central setup (FBA / FBM)",
          description: "We guide you through creating your professional seller account, choosing between Fulfillment by Amazon (FBA) for hands-off shipping or Fulfillment by Merchant (FBM) for more control. This includes verifying your business info and linking payment methods."
        },
        {
          name: "Walmart Seller Center setup",
          description: "From application approval to integrating your inventory, we ensure your Walmart marketplace account is optimized for high-volume sales."
        },
        {
          name: "eBay seller account setup",
          description: "We set up your eBay store with custom branding, payment integrations like PayPal, and initial listing tools."
        },
        {
          name: "TikTok Shop seller account creation",
          description: "We navigate TikTok's creator-friendly platform, linking your account to viral content for quick visibility."
        },
        {
          name: "LLC / Ltd company formation (some agencies)",
          description: "Partnering with trusted agencies, we assist in forming your legal entity for credibility and tax benefits."
        },
        {
          name: "EIN, tax & compliance assistance",
          description: "We secure your Employer Identification Number (EIN) and ensure compliance with IRS and platform-specific tax rules to avoid penalties."
        }
      ]
    }
  },
  "product-listing": {
    title: "Product Listing & Store Management",
    icon: <ShoppingBag className="h-12 w-12" />,
    description: "Launch high-converting listings and keep your storefront healthy with daily operations managed for you.",
    detailContent: {
      subtitle: "Product Listing & Store Management",
      overview: "Once your account is live, we create compelling listings that drive sales and manage your store for smooth operations.",
      features: [
        {
          name: "Product listing creation (titles, descriptions, keywords, SEO)",
          description: "Craft keyword-rich titles, detailed bullet-point descriptions, and backend search terms to boost discoverability on search engines and platform algorithms."
        },
        {
          name: "High-quality images & A+ content",
          description: "We source or edit professional photos, infographics, and enhanced A+ modules (on Amazon) to showcase features and increase conversion rates by up to 5-10%."
        },
        {
          name: "Category approval & ungating (esp. on Amazon/Walmart)",
          description: "Secure approvals for restricted categories like groceries or electronics by providing invoices and documentation."
        },
        {
          name: "Storefront/brand store design",
          description: "Customize your branded store page with banners, navigation, and themes for a professional look that builds trust."
        },
        {
          name: "Daily operations & order management",
          description: "Automate order processing, inventory sync, and customer communications to handle high volumes efficiently."
        }
      ]
    }
  },
  "advertising": {
    title: "Advertising & Marketing",
    icon: <Megaphone className="h-12 w-12" />,
    description: "Drive targeted traffic with paid ads and creator-led campaigns tuned for marketplace performance.",
    detailContent: {
      subtitle: "Advertising & Marketing",
      overview: "Amplify your reach with targeted ads and strategies tailored to each platform's ecosystem.",
      features: [
        {
          name: "Amazon PPC campaign setup & optimization",
          description: "Launch Pay-Per-Click campaigns with bid management, negative keywords, and ACoS (Advertising Cost of Sales) tracking to maximize ROI."
        },
        {
          name: "TikTok ads & influencer/affiliate marketing",
          description: "Create short-form video ads and partner with influencers for authentic promotions that leverage TikTok's algorithm."
        },
        {
          name: "Walmart advertising (Walmart Connect)",
          description: "Set up sponsored products and search ads to appear in Walmart's high-intent searches."
        },
        {
          name: "eBay promoted listings",
          description: "Boost visibility with percentage-based promotions on key items to drive more bids and buys."
        },
        {
          name: "Social media ads linked to stores",
          description: "Integrate Facebook/Instagram ads directly to your listings for seamless traffic and conversions."
        }
      ]
    }
  },
  "optimization": {
    title: "Optimization & Growth",
    icon: <Settings className="h-12 w-12" />,
    description: "Improve rankings, conversions, and account health with continuous optimization and monitoring.",
    detailContent: {
      subtitle: "Optimization & Growth",
      overview: "Fine-tune your store for better performance and sustainable expansion.",
      features: [
        {
          name: "SEO for marketplace rankings (Amazon, Walmart, eBay)",
          description: "Optimize listings with long-tail keywords, competitor analysis, and on-page tweaks to climb search rankings."
        },
        {
          name: "Conversion rate optimization",
          description: "A/B test images, pricing, and CTAs to reduce cart abandonment and lift sales by 20% or more."
        },
        {
          name: "Review & rating management",
          description: "Encourage positive reviews through follow-ups and handle negatives professionally to maintain high star ratings."
        },
        {
          name: "Account health monitoring & reinstatement support",
          description: "Track metrics like order defect rates and appeal suspensions with detailed plans."
        },
        {
          name: "Competitor/product research",
          description: "Use tools to analyze top sellers, pricing gaps, and trends for informed product decisions."
        }
      ]
    }
  },
  "fulfillment": {
    title: "Fulfillment & Logistics",
    icon: <Truck className="h-12 w-12" />,
    description: "Keep inventory flowing and orders delivered on time with optimized fulfillment operations.",
    detailContent: {
      subtitle: "Fulfillment & Logistics",
      overview: "Streamline shipping and inventory to keep customers happy and costs low.",
      features: [
        {
          name: "Amazon FBA inventory planning & management",
          description: "Forecast demand, prep shipments, and monitor stock levels to avoid stockouts or overstock fees."
        },
        {
          name: "Walmart fulfillment services (WFS) assistance",
          description: "Set up WFS for faster Prime-like delivery and handle labeling/packing requirements."
        },
        {
          name: "Multi-channel fulfillment (MCF) setups",
          description: "Use Amazon's MCF to fulfill orders from other platforms efficiently."
        },
        {
          name: "Return/refund handling",
          description: "Implement policies and automate processes to minimize losses while complying with platform rules."
        }
      ]
    }
  },
  "reporting": {
    title: "Reporting & Scaling",
    icon: <BarChart3 className="h-12 w-12" />,
    description: "Track what matters and scale into new markets with clear insights and automation.",
    detailContent: {
      subtitle: "Reporting & Scaling",
      overview: "Track your success and strategize for bigger wins with data-driven insights.",
      features: [
        {
          name: "Sales reports & performance analytics",
          description: "Generate custom dashboards showing revenue, units sold, and top products across platforms."
        },
        {
          name: "ROI tracking",
          description: "Measure ad spend vs. returns and identify profitable channels for budget allocation."
        },
        {
          name: "Market expansion strategy (cross-platform selling)",
          description: "Plan launches on new marketplaces like Etsy or Shopify with synced inventory."
        },
        {
          name: "Automation services for scaling",
          description: "Integrate tools like Zapier or Helium 10 for hands-free repricing, alerts, and bulk updates."
        }
      ]
    }
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#services">
              <Button variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>

            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-black">
                  {service.icon}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Learn More About Our <span className="text-primary neon-text">E-Commerce Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Welcome to our comprehensive guide on E-Commerce Services! Whether you're just starting out or looking to scale your online business, we offer expert support across major platforms like Amazon, Walmart, eBay, and TikTok Shop. Below, we'll break down our services into key categories, explaining how we can help you succeed at every stage. Each section includes visual examples to illustrate the process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm mb-12">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-black">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-4">
                  {service.detailContent.subtitle}
                </CardTitle>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  {service.detailContent.overview}
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {service.detailContent.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="border-l-4 border-primary/30 pl-6 py-4"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Card className="neon-border bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Ready to elevate your e-commerce game?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Contact us today to get started on any of these services!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/#contact">
                      <Button className="bg-gradient-to-r from-primary to-accent text-black neon-glow hover:scale-105 transition-all duration-300">
                        Get Started Today
                      </Button>
                    </Link>
                    <Link href="/#services">
                      <Button variant="outline" className="neon-border">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}