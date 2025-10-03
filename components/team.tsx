"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Director Ecommerce",
      bio: "Visionary leader with 15+ years in tech innovation and AI research.",
      image: "/ihsan.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/esi363",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jawad",
      role: "CEO",
      bio: "Full-stack architect specializing in scalable cloud solutions and DevOps.",
      image: "/jawad.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Lead AI Engineer",
      bio: "Machine learning expert with expertise in computer vision and NLP.",
      image: "/ai-engineer-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Zhang",
      role: "Head of Design",
      bio: "UX/UI designer creating intuitive experiences for complex technologies.",
      image: "/ux-designer-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kumar",
      role: "Security Architect",
      bio: "Cybersecurity specialist ensuring robust protection for all solutions.",
      image: "/security-expert-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Park",
      role: "Data Scientist",
      bio: "Analytics expert transforming data into actionable business insights.",
      image: "/data-scientist-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
            Meet the <span className="text-primary neon-text">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in
            cutting-edge technologies, united by a passion for creating
            exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-[28rem] neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300 group flex flex-col">
                <CardContent className="p-5 text-center flex flex-col h-full">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover neon-border group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-primary/20 text-primary text-xs"
                  >
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-2 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 h-8 w-8 p-0"
                      onClick={() =>
                        member.social.linkedin !== "#" &&
                        window.open(member.social.linkedin, "_blank")
                      }
                    >
                      <Linkedin className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 h-8 w-8 p-0"
                      onClick={() =>
                        member.social.twitter !== "#" &&
                        window.open(member.social.twitter, "_blank")
                      }
                    >
                      <Twitter className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 h-8 w-8 p-0"
                      onClick={() =>
                        member.social.github !== "#" &&
                        window.open(member.social.github, "_blank")
                      }
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
