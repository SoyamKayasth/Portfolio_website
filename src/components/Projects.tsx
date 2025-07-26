import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Live Video Sharing App',
      description: 'A real-time video sharing platform built with WebRTC and Socket.io for seamless communication.',
      technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB'],
      status: 'Completed',
      featured: true
    },
    {
      title: 'WhatsApp Clone - Chatting App',
      description: 'A full-featured messaging application with real-time chat, file sharing, and user authentication.',
      technologies: ['React', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
      status: 'Completed',
      featured: true
    },
    {
      title: 'Stock Market Application',
      description: 'A comprehensive stock market tracking app with real-time data, charts, and portfolio management.',
      technologies: ['React', 'Node.js', 'Chart.js', 'Alpha Vantage API', 'MySQL'],
      status: 'In Progress',
      featured: true
    },
    {
      title: 'Library Management System',
      description: 'A desktop application for managing library operations with GUI and database integration.',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
      status: 'Completed',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with location-based forecasts and beautiful UI.',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      status: 'Completed',
      featured: false
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['MERN Stack', 'Stripe API', 'JWT', 'Cloudinary'],
      status: 'In Progress',
      featured: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary/5 hover:border-primary/50"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary/5 hover:border-primary/50"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-heading text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects and opportunities.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
