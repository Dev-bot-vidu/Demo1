import React from "react";
import "../Styles/Blog.css";
import heroImg from "../Assets/blog123.jpg";
import finalCtaBg from "../Assets/roofglass.webp";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import blog1 from "../Assets/House-cleaning1.jpg"
import blog2 from "../Assets/House-cleaning2.webp"
import blog3 from "../Assets/car2.webp"
import blog4 from "../Assets/car1.png"
import blog5 from "../Assets/gutter1.jpg"
import blog6 from "../Assets/deep1.jpg"
import blog7 from "../Assets/deep2.jpg"
import blog8 from "../Assets/deep3.jpg"
import blog9 from "../Assets/final1.jpg"




const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Keep Your Home Spotless Year-Round",
    excerpt:
      "Discover practical habits and smart routines that make maintaining a clean, inviting home stress-free.",
    image: blog1
  },
  {
    id: 2,
    title: "How Professional Cleaning Saves Your Time and Money",
    excerpt:
      "Learn how investing in regular professional cleaning protects your property and your wallet.",
    image: blog2
  },
  {
    id: 3,
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    excerpt:
      "Understand which service you need and when, so you always get the best value for your home.",
    image: blog3
  },
  {
    id: 4,
    title: "5 Tips to Keep Your Home Spotless Year-Round",
    excerpt:
      "Discover practical habits and smart routines that make maintaining a clean, inviting home stress-free.",
    image: blog4
  },
  {
    id: 5,
    title: "How Professional Cleaning Saves Your Time and Money",
    excerpt:
      "Learn how investing in regular professional cleaning protects your property and your wallet.",
    image: blog5
  },
  {
    id: 6,
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    excerpt:
      "Understand which service you need and when, so you always get the best value for your home.",
    image: blog6
  },
  {
    id: 7,
    title: "5 Tips to Keep Your Home Spotless Year-Round",
    excerpt:
      "Discover practical habits and smart routines that make maintaining a clean, inviting home stress-free.",
    image: blog7
  },
  {
    id: 8,
    title: "How Professional Cleaning Saves Your Time and Money",
    excerpt:
      "Learn how investing in regular professional cleaning protects your property and your wallet.",
    image: blog8
  },
  {
    id: 9,
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    excerpt:
      "Understand which service you need and when, so you always get the best value for your home.",
    image: blog9
  }
];

function Blog() {
  return (
    <div className="blog-page">
        <Navbar/>
      {/* Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay-content">
          <h1>Our Blog</h1>
          <h2>Tips, Insights & Inspiration</h2>
          <p>
            Get the latest cleaning advice, home care tips, and behind-the-scenes updates from the Ivory Standard team.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="blog-list-section">
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div
                className="blog-card-image"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

     

      <Footer/>
    </div>
  );
}

export default Blog;
