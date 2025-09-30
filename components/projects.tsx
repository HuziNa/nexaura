"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description:
        "Enterprise-grade analytics platform with machine learning capabilities for real-time business insights.",
      image: "/modern-analytics-dashboard.png",
      tags: ["AI/ML", "React", "Python", "AWS"],
      category: "Enterprise Software",
      status: "Live",
    },
    {
      title: "Smart IoT Management System",
      description: "Comprehensive IoT device management platform with real-time monitoring and predictive maintenance.",
      image: "/iot-dashboard-with-device-monitoring.jpg",
      tags: ["IoT", "Node.js", "MongoDB", "Azure"],
      category: "IoT Solutions",
      status: "In Development",
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking system using blockchain technology for enhanced traceability.",
      image: "/blockchain-supply-chain.png",
      tags: ["Blockchain", "Solidity", "React", "Web3"],
      category: "Blockchain",
      status: "Live",
    },
    {
      title: "Mobile Health App",
      description: "Cross-platform health monitoring application with AI-driven health recommendations.",
      image: "/mobile-health-app-interface.jpg",
      tags: ["React Native", "AI", "Healthcare", "Firebase"],
      category: "Mobile App",
      status: "Live",
    },
    {
      title: "Cloud Migration Suite",
      description: "Automated cloud migration tools helping enterprises transition to modern cloud infrastructure.",
      image: "/cloud-migration-dashboard.jpg",
      tags: ["Cloud", "DevOps", "Kubernetes", "Terraform"],
      category: "Cloud Solutions",
      status: "Beta",
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring and threat detection system with automated response capabilities.",
      image: "/cybersecurity-monitoring-dashboard.png",
      tags: ["Security", "Python", "ML", "Real-time"],
      category: "Security",
      status: "Live",
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
            <span className="text-primary neon-text">Innovative</span> Solutions in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge projects that showcase our expertise in delivering transformative
            technology solutions across various industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs text-primary border-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-primary hover:text-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      <Github className="h-4 w-4" />
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
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
