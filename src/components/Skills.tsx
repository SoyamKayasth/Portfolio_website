import { Code, Database, Globe, Server, Smartphone, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'NPM', 'Webpack'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const mainSkills = ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'MERN Stack'];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to create amazing web applications
          </p>
        </div>

        {/* Main Skills Showcase */}
        <div className="mb-16 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {mainSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-3 text-lg font-semibold bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-heading text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-2 bg-muted/50 rounded-lg text-center border border-border/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 cursor-default text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Level Indicator */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-xl font-heading">
                <Code className="h-6 w-6 text-primary" />
                Experience Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Passion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;