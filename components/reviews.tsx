"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      name: "Jennifer Walsh",
      role: "CTO, TechCorp Solutions",
      company: "TechCorp Solutions",
      rating: 5,
      review:
        "Nexura transformed our entire infrastructure with their cloud migration expertise. The AI-powered analytics platform they built has revolutionized how we make business decisions. Exceptional team, outstanding results.",
      image: "/professional-woman-executive-headshot.png",
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO, StartupX",
      company: "StartupX",
      rating: 5,
      review:
        "Working with Nexura was a game-changer for our startup. Their mobile app development and blockchain integration exceeded our expectations. They delivered on time and within budget while maintaining the highest quality standards.",
      image: "/professional-ceo-headshot.png",
    },
    {
      name: "Sarah Thompson",
      role: "Head of Digital Innovation, MegaCorp",
      company: "MegaCorp",
      rating: 5,
      review:
        "The cybersecurity solutions implemented by Nexura have given us complete peace of mind. Their proactive approach and 24/7 monitoring have prevented multiple potential threats. Highly recommended for enterprise security.",
      image: "/professional-woman-tech-executive-headshot.jpg",
    },
    {
      name: "David Rodriguez",
      role: "VP of Operations, LogiFlow",
      company: "LogiFlow",
      rating: 5,
      review:
        "Nexura's IoT management system has optimized our entire supply chain. The predictive maintenance features have reduced downtime by 40% and saved us millions. Their expertise in emerging technologies is unmatched.",
      image: "/professional-man-operations-executive-headshot.jpg",
    },
    {
      name: "Lisa Park",
      role: "Chief Data Officer, DataDriven Inc",
      company: "DataDriven Inc",
      rating: 5,
      review:
        "The data engineering solutions provided by Nexura have transformed how we handle and analyze our data. Their real-time analytics platform provides insights we never thought possible. Truly innovative work.",
      image: "/professional-woman-data-executive-headshot.jpg",
    },
    {
      name: "Robert Kim",
      role: "Director of Technology, HealthTech Pro",
      company: "HealthTech Pro",
      rating: 5,
      review:
        "Nexura developed our healthcare mobile app with incredible attention to detail and compliance requirements. The AI-driven health recommendations have improved patient outcomes significantly. Outstanding partnership.",
      image: "/professional-man-healthcare-tech-executive-headsho.jpg",
    },
  ]

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
            What Our <span className="text-primary neon-text">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovative companies have to say about
            their experience working with Nexura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/50 mr-2" />
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">"{review.review}"</p>

                  <div className="flex items-center">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 neon-border"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <Badge variant="outline" className="mt-1 text-xs text-primary border-primary">
                        {review.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
