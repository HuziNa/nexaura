"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Zap } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@nexura.tech",
      description: "Get in touch for project inquiries",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Innovation Hub, Silicon Valley",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri, 9AM - 6PM PST",
      description: "We're here when you need us",
    },
  ]

  const services = [
    "AI & Machine Learning",
    "Cloud Solutions",
    "Mobile Development",
    "Web Development",
    "Data Engineering",
    "Cybersecurity",
    "IoT Solutions",
    "Blockchain Development",
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
            Let's Build the <span className="text-primary neon-text">Future</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
            navigate the digital landscape and create solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" className="neon-border bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="neon-border bg-background/50" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" className="neon-border bg-background/50" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <Input placeholder="Your Company" className="neon-border bg-background/50" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service Interest</label>
                  <select className="w-full p-3 rounded-md neon-border bg-background/50 text-foreground">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Project Details</label>
                  <Textarea
                    placeholder="Tell us about your project, timeline, and requirements..."
                    className="neon-border bg-background/50 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent text-black neon-glow hover:scale-105 transition-all duration-300">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Actions */}
          
          </motion.div>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  )
}
