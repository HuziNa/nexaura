"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, ShoppingBag, Megaphone, Settings, Truck, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ServicesDetail() {
  const serviceIcons = [
    <Users className="h-8 w-8" />,
    <ShoppingBag className="h-8 w-8" />,
    <Megaphone className="h-8 w-8" />,
    <Settings className="h-8 w-8" />,
    <Truck className="h-8 w-8" />,
    <BarChart3 className="h-8 w-8" />
  ];

  const serviceColors = [
    "from-primary to-accent",
    "from-accent to-primary",
    "from-primary to-accent",
    "from-accent to-primary",
    "from-primary to-accent",
    "from-accent to-primary"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Learn More About Our <span className="text-primary neon-text">E-Commerce Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Welcome to our comprehensive guide on E-Commerce Services! Whether you're just starting out or looking to scale your online business, we offer expert support across major platforms like Amazon, Walmart, eBay, and TikTok Shop. Below, we'll break down our services into key categories, explaining how we can help you succeed at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Service 1: Account Setup & Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[0]} flex items-center justify-center text-black`}>
                    {serviceIcons[0]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    1. Account Setup & Registration
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Getting your seller account up and running is the foundation of your e-commerce journey. We handle the technical details so you can focus on your products.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Amazon Seller Central setup (FBA / FBM):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      We guide you through creating your professional seller account, choosing between Fulfillment by Amazon (FBA) for hands-off shipping or Fulfillment by Merchant (FBM) for more control. This includes verifying your business info and linking payment methods.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Walmart Seller Center setup:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      From application approval to integrating your inventory, we ensure your Walmart marketplace account is optimized for high-volume sales.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• eBay seller account setup:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      We set up your eBay store with custom branding, payment integrations like PayPal, and initial listing tools.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• TikTok Shop seller account creation:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      We navigate TikTok's creator-friendly platform, linking your account to viral content for quick visibility.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• LLC / Ltd company formation:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Partnering with trusted agencies, we assist in forming your legal entity for credibility and tax benefits.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• EIN, tax & compliance assistance:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      We secure your Employer Identification Number (EIN) and ensure compliance with IRS and platform-specific tax rules to avoid penalties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 2: Product Listing & Store Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[1]} flex items-center justify-center text-black`}>
                    {serviceIcons[1]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    2. Product Listing & Store Management
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Once your account is live, we create compelling listings that drive sales and manage your store for smooth operations.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Product listing creation (titles, descriptions, keywords, SEO):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Craft keyword-rich titles, detailed bullet-point descriptions, and backend search terms to boost discoverability on search engines and platform algorithms.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• High-quality images & A+ content:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      We source or edit professional photos, infographics, and enhanced A+ modules (on Amazon) to showcase features and increase conversion rates by up to 5-10%.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Category approval & ungating (esp. on Amazon/Walmart):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Secure approvals for restricted categories like groceries or electronics by providing invoices and documentation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Storefront/brand store design:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Customize your branded store page with banners, navigation, and themes for a professional look that builds trust.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Daily operations & order management:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Automate order processing, inventory sync, and customer communications to handle high volumes efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 3: Advertising & Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[2]} flex items-center justify-center text-black`}>
                    {serviceIcons[2]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    3. Advertising & Marketing
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Amplify your reach with targeted ads and strategies tailored to each platform's ecosystem.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Amazon PPC campaign setup & optimization:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Launch Pay-Per-Click campaigns with bid management, negative keywords, and ACoS (Advertising Cost of Sales) tracking to maximize ROI.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• TikTok ads & influencer/affiliate marketing:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Create short-form video ads and partner with influencers for authentic promotions that leverage TikTok's algorithm.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Walmart advertising (Walmart Connect):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Set up sponsored products and search ads to appear in Walmart's high-intent searches.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• eBay promoted listings:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Boost visibility with percentage-based promotions on key items to drive more bids and buys.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Social media ads linked to stores:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Integrate Facebook/Instagram ads directly to your listings for seamless traffic and conversions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 4: Optimization & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[3]} flex items-center justify-center text-black`}>
                    {serviceIcons[3]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    4. Optimization & Growth
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Fine-tune your store for better performance and sustainable expansion.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• SEO for marketplace rankings (Amazon, Walmart, eBay):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Optimize listings with long-tail keywords, competitor analysis, and on-page tweaks to climb search rankings.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Conversion rate optimization:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      A/B test images, pricing, and CTAs to reduce cart abandonment and lift sales by 20% or more.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Review & rating management:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Encourage positive reviews through follow-ups and handle negatives professionally to maintain high star ratings.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Account health monitoring & reinstatement support:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Track metrics like order defect rates and appeal suspensions with detailed plans.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Competitor/product research:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Use tools to analyze top sellers, pricing gaps, and trends for informed product decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 5: Fulfillment & Logistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[4]} flex items-center justify-center text-black`}>
                    {serviceIcons[4]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    5. Fulfillment & Logistics
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Streamline shipping and inventory to keep customers happy and costs low.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Amazon FBA inventory planning & management:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Forecast demand, prep shipments, and monitor stock levels to avoid stockouts or overstock fees.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Walmart fulfillment services (WFS) assistance:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Set up WFS for faster Prime-like delivery and handle labeling/packing requirements.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Multi-channel fulfillment (MCF) setups:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Use Amazon's MCF to fulfill orders from other platforms efficiently.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Return/refund handling:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Implement policies and automate processes to minimize losses while complying with platform rules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 6: Reporting & Scaling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${serviceColors[5]} flex items-center justify-center text-black`}>
                    {serviceIcons[5]}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground">
                    6. Reporting & Scaling
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">
                  Track your success and strategize for bigger wins with data-driven insights.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Sales reports & performance analytics:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Generate custom dashboards showing revenue, units sold, and top products across platforms.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• ROI tracking:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Measure ad spend vs. returns and identify profitable channels for budget allocation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Market expansion strategy (cross-platform selling):</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Plan launches on new marketplaces like Etsy or Shopify with synced inventory.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">• Automation services for scaling:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                      Integrate tools like Zapier or Helium 10 for hands-free repricing, alerts, and bulk updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Card className="neon-border bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Ready to Elevate Your <span className="text-primary neon-text">E-Commerce Game?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Contact us today to get started on any of these services and transform your online business!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contact">
                    <Button className="bg-gradient-to-r from-primary to-accent text-black neon-glow hover:scale-105 transition-all duration-300">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="neon-border hover:neon-glow transition-all duration-300">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}