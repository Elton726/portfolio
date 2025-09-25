import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, 
  FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiAmazon
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: FaReact,
      color: 'text-purple-500',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'React', icon: FaReact, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      category: 'Backend',
      icon: FaNodeJs,
      color: 'text-blue-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 45 },
        { name: 'Express.js',icon:SiExpress ,level: 50 },
        { name: 'Java', icon: FaJava, level: 50},
        { name: 'MongoDB', icon: SiMongodb, level: 45 },
        
      ]
    },
    {
      category: 'Tools & Others',
      icon: FaGitAlt,
      color: 'text-indigo-500',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, level: 60 },
        { name: 'REST APIs', level: 60 },
        { name: 'UI/UX Design', level: 45 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 gradient-bg-skills text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Technologies and tools I've been learning and working with
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 professional-card border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white/10 mr-3">
                  <category.icon className={`text-xl ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon && (
                          <skill.icon className="text-lg text-purple-200" />
                        )}
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-purple-200 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-12 text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 professional-card border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Machine Learning', 'Docker', 'GraphQL', 'React Native', 'Cloud Computing'].map((tech) => (
              <span key={tech} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-medium border border-white/10 hover:bg-white/30 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;