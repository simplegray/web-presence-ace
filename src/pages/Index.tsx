import { Github, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import { CodeTag } from "@/components/CodeTag";
import { SocialLink } from "@/components/SocialLink";
import { SkillBadge } from "@/components/SkillBadge";
import { ProfileCard } from "@/components/ProfileCard";

const socialLinks = [
  { href: "https://twitter.com/huntergray", icon: <Twitter size={20} />, label: "Twitter" },
  { href: "https://github.com/simplegray", icon: <Github size={20} />, label: "GitHub" },
  { href: "https://instagram.com/simplegray", icon: <Instagram size={20} />, label: "Instagram" },
  { href: "https://dribbble.com/huntergray", icon: <Dribbble size={20} />, label: "Dribbble" },
  { href: "https://linkedin.com/in/huntergray", icon: <Linkedin size={20} />, label: "LinkedIn" },
];

const skills = [
  "Marketplaces",
  "Consumer Experience",
  "ML/AI",
  "Engineering Leadership",
  "Product Design",
  "Scalable Systems",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
            <ProfileCard className="mb-8" />

            {/* Name with code tag styling */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3 flex-wrap justify-center">
              <CodeTag>hello</CodeTag>
              <span>I'm Hunter Gray</span>
              <span className="text-3xl">👨‍💻</span>
            </h1>
          </div>

          {/* Bio Section */}
          <div 
            className="glass-card rounded-2xl p-8 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Founder and technology executive</span>{" "}
                at the intersection of marketplaces, consumer experience, and ML/AI.
              </p>

              <p>
                Over <span className="text-primary font-semibold">15 years</span> of experience 
                building high-performing engineering teams and turning complex business problems 
                into simple, scalable solutions.
              </p>

              <p>
                Ultimately, I'm driven by curiosity, collaboration, and a love for{" "}
                <span className="text-accent">elegant product design</span>. I believe the right 
                mix of data and design can change how people move, connect, and live.
              </p>

              <p className="text-base">
                When I'm not working, you'll usually find me watching football ⚽, 
                playing with my dog 🐶, or chasing down the perfect cup of coffee ☕
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div 
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div 
            className="flex flex-wrap gap-3 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>

          {/* CTA */}
          <div 
            className="mt-12 text-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-muted-foreground mb-4">
              Feel free to say hi! 👋
            </p>
            <CodeTag variant="close" className="text-lg">hello</CodeTag>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
