import React from 'react';
import { FaUniversity, FaCode, FaHeart, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const education = [
    { 
      degree: "Bachelor of Science in Information Communication Technology",
      school: "Mzuzu University",
      period: "2022 - 2027",
      gpa: "2.8/4.0"
    }
  ];

  const interests = ['Web Development',  'Open Source', 'UI/UX Design', 'Mobile Apps'];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate ICT student with a love for coding and creating innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaHeart className="text-purple-500 mr-2" />
                  My Passion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I discovered my love for programming during my first year of university and have been 
                  hooked ever since. I enjoy solving complex problems and building applications that 
                  make a difference. When I'm not coding, you can find me contributing to open-source 
                  projects or learning new frameworks.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaCode className="text-blue-500 mr-2" />
                  What I'm Learning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Currently diving deep into full-stack development, Mobile app development. I believe in continuous learning and staying updated with 
                  the latest industry trends and best practices.
                </p>
              </div>

              {/* Interests */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 professional-card border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaGraduationCap className="text-purple-600 mr-2" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{edu.degree}</h4>
                  <p className="text-purple-600 font-medium">{edu.school}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{edu.period}</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Mobile App Development'].map((course) => (
                      <span key={course} className="bg-white px-2 py-1 rounded text-xs text-gray-600 border">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;