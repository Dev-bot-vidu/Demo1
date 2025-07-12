import React from "react";
import { useParams, Link } from "react-router-dom";
import "../Styles/Blog.css";
import heroImg from "../Assets/roof1.jpg";
import blog1 from "../Assets/House-cleaning1.jpg"
import blog2 from "../Assets/House-cleaning2.webp"
import blog3 from "../Assets/car2.webp"
import blog4 from "../Assets/car1.png"
import blog5 from "../Assets/gutter1.jpg"
import blog6 from "../Assets/deep1.jpg"
import blog7 from "../Assets/deep2.jpg"
import blog8 from "../Assets/deep3.jpg"
import blog9 from "../Assets/final1.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogPosts = [
  {
    id: "1",
    title: "5 Tips to Keep Your Home Spotless Year-Round",
   content: `
<p>Keeping your home spotless year-round doesn’t have to feel like a never-ending chore. With the right habits and a little planning, you can enjoy a tidy, welcoming space every single day — without spending your entire weekend cleaning.</p>
<p>A spotless home is all about consistency — not perfection. Focus on small, daily habits that add up over time. And don’t be afraid to ask for help when needed. For bigger tasks or when life gets busy, consider hiring a professional cleaning service to give your home a fresh start.
A clean, clutter-free space makes life more comfortable and relaxing — and you’ll always be ready to welcome guests with pride!</p>
<br />
<h3>1. Declutter Frequently</h3>
<p>One of the biggest secrets to a spotless home is keeping clutter at bay. Take 10-15 minutes every evening to put away items that have accumulated on countertops, tables, and floors. Donate, sell, or throw away things you no longer need. A clutter-free space instantly looks cleaner — and is much easier to maintain.</p>
<br />
<h3>2. Make Your Bed Every Morning</h3>
<p>This small habit sets the tone for the whole day. A made bed instantly makes your bedroom look more organized. Teach kids to make their beds too — it only takes a few minutes, but the payoff is huge.</p>
<br />
<h3>3. Establish a Simple Daily Cleaning Routine</h3>
<p>Instead of waiting until your home is a mess, do small tasks daily. Wipe kitchen counters after meals, sweep high-traffic areas, and tidy up common spaces. This prevents dirt and mess from piling up and makes deep cleaning sessions much quicker.</p>
<br />
<h3>4. Tackle One Deep-Cleaning Task Each Week</h3>
<p>Choose one area to deep clean every week — like scrubbing bathroom tiles, vacuuming behind furniture, or cleaning out the fridge. By rotating tasks, you’ll cover your whole home each month without feeling overwhelmed.</p>
<br />
<h3>5. Keep Cleaning Supplies Handy</h3>
<p>Store essential supplies where you need them most. For example, keep disinfecting wipes in the bathroom and kitchen for quick clean-ups. Having supplies within reach makes it easier to handle spills or messes right away.</p>
<br />
<h4>Bonus Tip: Involve the Whole Family</h4>
<p>Keeping a home spotless shouldn’t be a one-person job. Assign simple tasks to everyone in the household. Even young kids can help by putting away toys or wiping down tables. Make it fun by turning on music or setting a timer for quick clean-up races!</p>
<br />
<h4>Final Thoughts</h4>
<p>A spotless home is all about consistency — not perfection. Focus on small, daily habits that add up over time. And don’t be afraid to ask for help when needed. For bigger tasks or when life gets busy, consider hiring a professional cleaning service to give your home a fresh start.
A clean, clutter-free space makes life more comfortable and relaxing — and you’ll always be ready to welcome guests with pride!</p>
<br />
Happy cleaning! 🧽✨
`
,
    image: blog1
  },
  {
    id: "2",
    title: "Why Professional Cleaning Saves You Money",
    content: `Many homeowners don't realize that... [Full blog content here]`,
    image: blog2
  },
  {
    id: "3",
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    content: `Wondering when to choose deep cleaning... [Full blog content here]`,
    image: blog3
  },
   {
    id: "4",
    title: "5 Tips to Keep Your Home Spotless Year-Round",
    content: `Keeping your home spotless isn't about cleaning all day. [Full blog content goes here]`,
    image: blog4
  },
  {
    id: "5",
    title: "Why Professional Cleaning Saves You Money",
    content: `Many homeowners don't realize that... [Full blog content here]`,
  
    image: blog5
  },
  {
    id: "6",
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    content: `Wondering when to choose deep cleaning... [Full blog content here]`,
   
    image: blog6
  },  
   {
    id: "7",
    title: "5 Tips to Keep Your Home Spotless Year-Round",
    content: `Keeping your home spotless isn't about cleaning all day. [Full blog content goes here]`,

    image: blog7
  },
  {
    id: "8",
    title: "Why Professional Cleaning Saves You Money",
    content: `Many homeowners don't realize that... [Full blog content here]`,

    image: blog8
  },
  {
    id: "9",
    title: "Deep Cleaning vs. Standard Cleaning — What’s the Difference?",
    content: `Wondering when to choose deep cleaning... [Full blog content here]`,

    image: blog9
  }
];

function SinglePost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-page">
        <h2>Post Not Found</h2>
       
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div className="overlay-content" style={{marginTop:100}}>
          <h1>{post.title}</h1>
          <p className="post-date">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="single-post-content">
        <div className="container">
  

          <div
  className="post-body"
  style={{ marginTop: "2rem", fontSize: "18px", lineHeight: "1.6" }}
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SinglePost;
