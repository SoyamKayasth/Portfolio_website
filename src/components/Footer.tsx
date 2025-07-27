import { Heart, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/SoyamKayasth',
    color: 'hover:text-gray-300'
  }, {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/soyam-kayasth',
    color: 'hover:text-blue-400'
  }, {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com',
    color: 'hover:text-blue-400'
  }, {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com',
    color: 'hover:text-pink-400'
  }];
  const quickLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-glow/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">Soyam Kayasth</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions. 
              Currently pursuing MCA and building the future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-200 transform hover:scale-110 ${social.color}`}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => scrollToSection(link.href.substring(1))} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-left">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:soyam@example.com" className="hover:text-primary-foreground transition-colors duration-200 text-sm">soyamkayasth411@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">
                  At. post Hatnoor, Tal. Kannad<br />
                  Dist. Chh. Sambhajinagar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              © {currentYear} Soyam Kayasth. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>With me3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;