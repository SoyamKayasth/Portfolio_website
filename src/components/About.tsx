import { GraduationCap, Trophy, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const About = () => {
  const achievements = [{
    icon: Trophy,
    title: '1st Prize in Hackathon',
    desc: 'Winner of college-level hackathon'
  }, {
    icon: Trophy,
    title: '2nd Prize in Coding Competition',
    desc: 'Secured 2nd position in coding contest'
  }, {
    icon: BookOpen,
    title: 'National Level Quiz',
    desc: 'Participated in national quiz competition'
  }];
  const education = [{
    level: 'MCA',
    institution: 'Government College of Pune',
    status: 'Current',
    highlight: true
  }, {
    level: 'BCA',
    institution: 'BAMU',
    status: 'Current',
    highlight: true
  }, {
    level: '12th PCM',
    institution: '60%',
    status: 'Completed',
    highlight: false
  }, {
    level: '10th',
    institution: '87%',
    status: 'Completed',
    highlight: false
  }];
  const hobbies = ['Reading Books', 'Playing Cricket', 'Watching Podcasts', 'Travelling'];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">My name is Soyam M Kayasth. I am a Third year student of BCA with a solid grip on Java and Data Structures & Algorithms (DSA).My journey into tech started with Java, and along the way, I’ve also explored full-stack development using the MERN Stack, with a passion for creating dynamic and responsive web applications.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Description */}
          <div className="animate-fade-in">
            <Card className="h-full bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have experience in both front-end and back-end development, and I enjoy working 
                  with the MERN stack to build modern web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">I’m driven by the ambition to build a career in Software Development. I love solving real-world problems through code and always strive to improve both my logic and creativity.
My Goal is -
To become a skilled Web Developer who not only builds great applications but also makes a positive impact through technology. I’m always eager to learn and take on new challenges that push my limits.
If you find my work interesting, feel free to explore my Git Hub repositories or connect with me!

              </p>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <Card className="h-full bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {education.map((edu, index) => <div key={index} className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${edu.highlight ? 'bg-primary/5 border-primary/20' : 'bg-muted/50 border-border/50'}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className={`font-semibold ${edu.highlight ? 'text-primary' : 'text-foreground'}`}>
                            {edu.level}
                          </h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${edu.status === 'Current' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="animate-fade-in">
            <Card className="h-full bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <Trophy className="h-6 w-6 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                      <achievement.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hobbies */}
          <div className="animate-slide-in-right">
            <Card className="h-full bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-heading">
                  <Heart className="h-6 w-6 text-primary" />
                  Hobbies & Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => <div key={index} className="p-3 bg-muted/50 rounded-lg text-center border border-border/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 cursor-default">
                      <span className="text-sm font-medium text-foreground">{hobby}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;