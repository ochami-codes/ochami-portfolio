import React from "react";

export default function Projects() {
  const projects = [
      {
            title: "SAM Ministries",
                  description:
                          "A digital evangelism platform sharing Bible-based truth through articles, media, and interactive tools for spiritual growth.",
                                link: "#",
                                      button: "View Details",
                                          }
                                            ];

                                              return (
                                                  <section className="projects-section" id="projects">
                                                        <h1>Featured Projects</h1>

                                                              <p className="intro">
                                                                      Each project reflects my mission to combine <strong>faith, innovation,</strong> 
                                                                              and <strong>practical impact</strong> — creating digital solutions that 
                                                                                      uplift lives and glorify God.
                                                                                            </p>

                                                                                                  <div className="project-grid">
                                                                                                          {projects.map((project, index) => (
                                                                                                                    <div key={index} className="project-card">
                                                                                                                                <h3>{project.title}</h3>
                                                                                                                                            <p>{project.description}</p>
                                                                                                                                                        <a href={project.link}>{project.button}</a>
                                                                                                                                                                  </div>
                                                                                                                                                                          ))}
                                                                                                                                                                                </div>
                                                                                                                                                                                    </section>
                                                                                                                                                                                      );
                                                                                                                                                                                      }