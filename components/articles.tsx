"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      title: "The Future of AI in Enterprise Applications",
      excerpt:
        "Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation.",
      author: "Alex Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/ai-futuristic-interface.png",
      featured: true,
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt:
        "Best practices for designing cloud infrastructure that grows with your business needs and maintains performance.",
      author: "Sarah Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Cloud Computing",
      image: "/images/thumbnails/cloud-computing.png",
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt:
        "Essential security measures and strategies to protect your organization in a distributed work environment.",
      author: "David Kumar",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Cybersecurity",
      image: "/cybersecurity-shield.png",
    },
    {
      title: "Data-Driven Decision Making with Analytics",
      excerpt:
        "How modern analytics platforms are enabling businesses to make informed decisions based on real-time data insights.",
      author: "Lisa Park",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "Data Science",
      image: "/data-analytics-charts-and-graphs.jpg",
    },
    {
      title: "The Rise of Progressive Web Applications",
      excerpt:
        "Understanding PWAs and how they're bridging the gap between web and mobile applications for better user experiences.",
      author: "Emily Zhang",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Web Development",
      image: "/progressive-web-app-mobile-interface.jpg",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      excerpt:
        "Exploring practical applications of blockchain technology in supply chain, healthcare, and enterprise solutions.",
      author: "Marcus Johnson",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "Blockchain",
      image: "/blockchain-network.png",
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
            <span className="text-primary neon-text">Insights</span> & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights
            from our team of technology experts. Discover how emerging
            technologies are shaping the future of business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group overflow-hidden ${
                  article.featured ? "ring-2 ring-primary/50" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-black text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="secondary"
                      className="bg-black/50 text-white backdrop-blur-sm text-xs"
                    >
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-xs line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 group-hover:translate-x-1 transition-all duration-300 h-7 text-xs"
                    >
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-primary to-accent text-black neon-glow hover:scale-105 transition-all duration-300">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
