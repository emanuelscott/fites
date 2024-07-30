import React from 'react';
import Image from 'next/image';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import authorImage from '../../images/author.jpg'; 
import './page.css';

const Blog = () => {
  const posts = [
    {
      title: 'Top 5 Cardio Workouts to Boost Stamina and Burn Fat',
      date: 'July 18, 2024',
      image: image1, 
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
    {
      title: 'Strength Training for Beginners: Your First Steps to an Ideal Body',
      date: 'July 18, 2024',
      image: image2, 
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
    {
      title: 'How to Effectively Combine Yoga and Fitness for Optimal Results',
      date: 'July 18, 2024',
      image: image3,
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
    {
      title: 'Top 5 Cardio Workouts to Boost Stamina and Burn Fat',
      date: 'July 18, 2024',
      image: image1, 
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
    {
      title: 'Strength Training for Beginners: Your First Steps to an Ideal Body',
      date: 'July 18, 2024',
      image: image2, 
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
    {
      title: 'How to Effectively Combine Yoga and Fitness for Optimal Results',
      date: 'July 18, 2024',
      image: image3, 
      category: 'Fitness',
      author: 'Emanuel Scott',
    },
  ];

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>BLOG</h1>
        <div className="blog-categories">
          <button className="active">Fitness</button>
          <button>Strength Training</button>
          <button>Nutrition and Diet</button>
          <button>Home Workouts</button>
        </div>
      </header>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="image-container">
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="post-image" />
            </div>
            <div className="blog-post-info">
              <div className="blog-post-category">{post.category}</div>
              <h2>{post.title}</h2>
              <div className="blog-post-meta">
                <div className="author-meta">
                  <div className="author-image">
                    <Image src={authorImage} alt={post.author} width={40} height={40} />
                  </div>
                  <p>{post.author}</p>
                </div>
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
