import React from "react";
import "./App.css";
import photo from "../assets/photo.jpg"; // adjust path as needed

function About() {
  return (
      <section className="about" id="about">
            <div className="about-container">
                    <div className="about-image">
                              <img src="photo.jpg" alt="Ian Ochami Portrait" />
                                      </div>

                                              <div className="about-text">
                                                        <h2>About Me</h2>
                                                                  <p>
                                                                              Hello, I’m <strong>Ian Ochami</strong> — a digital evangelist, tech
                                                                                          enthusiast, and smart farming advocate. I believe technology, faith,
                                                                                                      and innovation can work together to bring hope and transformation to
                                                                                                                  lives.
                                                                                                                            </p>
                                                                                                                                      <p>
                                                                                                                                                  With a background in <strong>medical biochemistry</strong> and a
                                                                                                                                                              calling to digital ministry, I’ve founded initiatives like{" "}
                                                                                                                                                                          <em>SAM Ministries</em>, <em>Ochian Foods</em>, and a vision for a
                                                                                                                                                                                      diagnostic lab to promote health and faith-based solutions in
                                                                                                                                                                                                  Africa.
                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                      <p>
                                                                                                                                                                                                                                  Whether I’m designing websites, researching health topics,
                                                                                                                                                                                                                                              developing digital tools, or sharing the gospel online, I do it all
                                                                                                                                                                                                                                                          with one mission: <strong>To glorify God and uplift humanity</strong>.
                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                              <p>
                                                                                                                                                                                                                                                                                          Join me on this journey of innovation, purpose, and service. Let’s
                                                                                                                                                                                                                                                                                                      make a difference — digitally, spiritually, and practically.
                                                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                    export default About;