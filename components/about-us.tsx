"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Users, Award } from "lucide-react"

export default function AboutUs() {
  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation First",
      description:
        "We push the boundaries of technology to deliver cutting-edge solutions that drive your business forward.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Focused",
      description:
        "Every project is executed with meticulous attention to detail and unwavering commitment to excellence.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Centric",
      description:
        "Your success is our mission. We build lasting partnerships through transparent communication and results.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assured",
      description:
        "We maintain the highest standards in every aspect of our work, from code quality to user experience.",
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
            Shaping the <span className="text-primary neon-text">Digital Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded on the principle that technology should empower, not complicate, Nexura combines next-generation
            innovation with an aura of simplicity. We transform complex challenges into elegant solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
