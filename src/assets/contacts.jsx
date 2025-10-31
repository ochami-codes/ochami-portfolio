import React from "react";
import "./Contact.css";

function Contact() {
  return (
      <div className="contact-page">
            <header>
                    <h1>Contact Me</h1>
                          </header>

                                <div className="contact-container">
                                        <h2>Let’s Connect</h2>

                                                <div className="contact-info">
                                                          <p>
                                                                      <strong>Email:</strong>{" "}
                                                                                  <a href="mailto:ochamiian29@gmail.com">ochamiian29@gmail.com</a>
                                                                                            </p>
                                                                                                      <p>
                                                                                                                  <strong>WhatsApp:</strong>{" "}
                                                                                                                              <a
                                                                                                                                            href="https://wa.me/254795044356"
                                                                                                                                                          target="_blank"
                                                                                                                                                                        rel="noopener noreferrer"
                                                                                                                                                                                    >
                                                                                                                                                                                                  +254 795 044 356
                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                  <p>
                                                                                                                                                                                                                                              <strong>Location:</strong> Maai Mahiu, Kenya
                                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                        <form
                                                                                                                                                                                                                                                                                  action="mailto:ochamiian29@gmail.com"
                                                                                                                                                                                                                                                                                            method="post"
                                                                                                                                                                                                                                                                                                      encType="text/plain"
                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                        <label htmlFor="name">Your Name:</label>
                                                                                                                                                                                                                                                                                                                                  <input type="text" id="name" name="name" required />

                                                                                                                                                                                                                                                                                                                                            <label htmlFor="email">Your Email:</label>
                                                                                                                                                                                                                                                                                                                                                      <input type="email" id="email" name="email" required />

                                                                                                                                                                                                                                                                                                                                                                <label htmlFor="message">Your Message:</label>
                                                                                                                                                                                                                                                                                                                                                                          <textarea id="message" name="message" rows="6" required></textarea>

                                                                                                                                                                                                                                                                                                                                                                                    <button type="submit">Send Message</button>
                                                                                                                                                                                                                                                                                                                                                                                            </form>
                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                        export default Contact;