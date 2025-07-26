import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Chh. Sambhajinagar, India
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Soyam
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
              Full Stack Developer & MCA Student
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Passionate about creating modern, responsive web applications using the MERN stack. 
              Currently pursuing MCA at Government College of Pune with hands-on experience in 
              both frontend and backend development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20 animate-pulse-glow">
                <img 
                  src={profileImage} 
                  alt="Soyam Kayasth" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg animate-bounce-gentle">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToNext}
            className="hover:bg-primary/10 hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;