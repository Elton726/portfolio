import React from "react";
import { FaExternalLinkAlt, FaGithub, FaJava, FaStar } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJetpackcompose,
  SiKotlin,
  SiC,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Notes App",
      description:
        "A sleek note-taking application with a rich text editor, tagging, and cloud synchronization.",
      technologies: [SiKotlin, SiJetpackcompose],
      techNames: ["Kotlin", "Jetpack Compose"],
      featured: true,
    },
    {
      title: "Digital clock App",
      description: "A digital clock application with alarm and timer features.",
      technologies: [SiC],
      techNames: ["C"],
      featured: true,
    },
    {
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management system with real-time tracking and reporting features.",
      technologies: [FaJava],
      techNames: ["Java", "Python"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've built to practice and showcase my
            skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden professional-card border border-gray-100 ${
                project.featured ? "lg:flex" : ""
              }`}
            >
              <div className={`p-8 ${project.featured ? "lg:w-2/3" : ""}`}>
                {project.featured && (
                  <div className="flex items-center mb-4">
                    <FaStar className="text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-yellow-600">
                      Featured Project
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center space-x-4 mb-6">
                  {project.technologies.map((TechIcon, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2"
                    >
                      <TechIcon className="text-xl text-purple-600" />
                      <span className="text-sm text-gray-500">
                        {project.techNames[techIndex]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="lg:w-1/3 gradient-bg-card p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-lg font-semibold">Featured</p>
                    <p className="text-purple-100">Student Project</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="gradient-bg-card hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 professional-card">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
