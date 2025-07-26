import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'soyam@example.com',
      link: 'mailto:soyam@example.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 99700 97411',
      link: 'tel:+919970097411',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chh. Sambhajinagar, India',
      link: '#',
      color: 'text-red-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/SoyamKayasth',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/soyam-kayasth',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-card border-border/50 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-foreground mb-4">
                  Let's Connect
                </CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'll get back to you as soon as possible!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:bg-muted/50 hover:border-primary/20 transition-all duration-200 group"
                    >
                      <div className={`p-3 rounded-full bg-primary/10 ${info.color} group-hover:bg-primary/20 transition-colors duration-200`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-muted/50 border border-border/50 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="pt-6 border-t border-border/50">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to emails within 24 hours. For urgent matters, feel free to call me directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-gradient-card border-border/50 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-foreground mb-4">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss it!
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="Project Discussion"
                      className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;