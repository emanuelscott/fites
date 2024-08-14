import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./navBar";
import Footer from "./fotter";

import './about.css'
import break1 from "./assets/break.png";
import cover from "./assets/Emanuel1.png";
import cover2 from "./assets/emanual5.png";
import cover3 from "./assets/emanual6.png";
import arrow from "./assets/backArrow.png";
import arrowF from "./assets/frontarrow.png";
import old1 from "./assets/image.png";
import old2 from "./assets/emanual3.png";
import old3 from "./assets/emanual7.png";
import insta from "./assets/insta.png";
import Xlogo from "./assets/X.png";
import facebook from "./assets/facebook.png";
import tiktok from "./assets/tiktok.png";
import new1 from "./assets/new.png";
import new2 from "./assets/new1.png";
import break2 from "./assets/breakdown.png";
import './page.css';
import human from "./assets/body1.png"
import human1 from "./assets/human1.png"
import human3 from "./assets/human3.png"
import run from "./assets/run 1.png"
import girl from "./assets/girlv.png"
import letter from "./assets/letter.png"
import arrow1 from "./assets/arrow.png"
import human4 from "./assets/human4.png"
import human5 from "./assets/human5.png"
import stars from "./assets/stars.png"
import heart from "./assets/heart.png"
import calender from "./assets/date.png"
import star from "./assets/stars1.png"
import profile from "./assets/profile.png"
import owner from "./assets/owner.png"
import body from "./assets/body.png"
import author from "./assets/author.png"
import author1 from "./assets/author1.png"
import author2 from "./assets/author2.png"

function About() {

    const posts = [

        {
            title: 'Top 5 Cardio Workouts to Boost Stamina and Burn Fat',
            date: 'July 18, 2024',
            image: author,
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
        {
            title: 'Strength Training for Beginners: Your First Steps to an Ideal Body',
            date: 'July 18, 2024',
            image: author2,
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
        {
            title: 'How to Effectively Combine Yoga and Fitness for Optimal Results',
            date: 'July 18, 2024',
            image: author1,
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
    ];

    return (
        <>
            <div style={{ fontFamily: "Oswald" }}>
                <Navbar></Navbar>
                <div style={{ background: "black", display: "table-row", overflow: "hidden" }}>
                    <div style={{ position: "relative" }}>
                        <div className="grid-container-top  container" style={{ paddingBottom: "30px", paddingTop: "30px", minWidth: "100%" }}>
                            <div id="intro1" style={{ paddingLeft: "20%" }}>
                                <div style={{ justifyContent: "left", minWidth: "100%" }}>
                                    <div style={{ display: "block", paddingLeft: "10%" }}>
                                        <div id="image1">
                                            <img src={old3} style={{ width: "320.06px", height: "404.53px", padding: "5px" }} />
                                        </div>
                                        <div id="image2">
                                            <img src={old2} style={{ width: "314px", height: "438px", padding: "5px" }} />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div style={{ paddingLeft: "20px", paddingRight: "50px", paddingBottom: "10px", paddingTop: "10px" }}>
                                <div style={{ justifyContent: "center", display: "block", textAlign: "center" }}>
                                    <div style={{ justifyContent: "left", color: "#D80000", fontWeight: "bold", fontSize: "28px" }}>OUR FOUNDER</div>
                                    <div style={{ justifyContent: "left", color: "white", fontWeight: "bold", fontSize: "48px" }}>EMANUEL SCOTT</div>
                                    <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px" }}>Hi, my name is Emanuel Scott. My journey towards health and self-improvement has been anything but easy. My family and I were homeless for about two years. After finding a home, I was kicked out at 14 and lived with various friends, constantly in and out of school. Despite these challenges, I managed to get into the Health Science class at WarrenTech in Lakewood, CO, where I overcame a learning disability with help and determination.
                                    </div>
                                </div>
                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px", textAlign: "center" }}>
                                    I Graduated from high school in 2012 with dreams of joining the NFL. While I diligently worked on my body and skills, life had other plans. In 2016, I joined the Air Force and proudly served for four years. During my service, I earned a BA in Communication Studies.
                                </div>
                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px", textAlign: "center" }}>
                                    In 2020, I moved to Dallas during the COVID-19 pandemic, seeking new growth opportunities. I completed a software developer boot camp, becoming a full stack developer, while concurrently earning an MBA from the University of Northern Colorado.
                                </div>

                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px", textAlign: "center" }}>
                                    Throughout this journey, I have dedicated myself to personal development, focusing on physical conditioning, mental acuity, financial stability, and spiritual enlightenment. Balancing these areas proved challenging, but it taught me the importance of non-negotiables.
                                </div>
                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px", textAlign: "center" }}>
                                    Engaging our bodies is fundamental to our growth and well-being. Our bodies are the foundation of our overall health, and by focusing on physical fitness, we lay the groundwork for improved mental clarity, emotional resilience, and spiritual growth. Prioritizing physical health helps us feel strong, confident, and energized, equipping us to tackle life’s challenges. When you look good, you naturally feel more confident; by training your body to handle tough tasks, you reprogram it to embrace its new potential.
                                </div>
                                {/* <div style={{ justifyContent: "left", color: "CCCCCC", fontSize: "16px", paddingTop: "40px",textAlign:"center"}}>
                                Overall, this journey requires us to understand that starting is the key to opening ourselves to new possibilities that our old selves couldn’t even imagine. My holistic approach to fitness addresses all aspects of wellness, guiding others towards a balanced and fulfilling life.
                                </div>
                                <div style={{ justifyContent: "left", color: "CCCCCC", fontSize: "28px", paddingTop: "40px",textAlign:"center"}}>
                                Welcome to Emanuel Scott Fitness, where I strive to help others transform their lives through fitness and holistic wellness.
                                </div> */}
                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "16px", paddingTop: "20px", textAlign: "center" }}>
                                    Overall, this journey requires us to understand that starting is the key to opening ourselves to new possibilities that our old selves couldn’t even imagine. My holistic approach to fitness addresses all aspects of wellness, guiding others towards a balanced and fulfilling life.
                                </div>
                                <div style={{ justifyContent: "left", color: "#CCCCCC", fontSize: "22px", paddingTop: "20px", textAlign: "center", paddingLeft: "10%", paddingRight: "10%" }}>
                                    Welcome to Emanuel Scott Fitness, where I strive to help others transform their lives through fitness and holistic wellness.
                                </div>

                                <div className="grid-container1" style={{paddingLeft:"30%",paddingRight:"30%",paddingTop:"7%",paddingBottom:"3%"}}>
                                <img src={insta} style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src={tiktok} style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src={Xlogo} style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src={facebook} style={{ width: "60px", height: "45px", padding: "5px" }} />
                                </div>
                            </div>


                            <div id="intro2" style={{ paddingLeft: "15%" }}>
                                <div style={{ justifyContent: "left", minWidth: "100%" }}>
                                    <div style={{ display: "block" }}>
                                        <div id="image1">
                                            <img src={cover2} style={{ width: "278.95px", height: "350.38px", padding: "5px" }} />
                                        </div>
                                        <div id="image2">
                                            <img src={cover} style={{ width: "346px", height: "150px", padding: "5px" }} />
                                        </div>
                                        <div id="image3">
                                            <img src={cover3} style={{ width: "306.13", height: "345.32px", padding: "5px" }} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div style={{ position: "relative" }}>

                        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", minWidth: "100%" }}>
                            <div style={{ color: "white", fontSize: "38px", fontWeight: "500", justifyContent: "center" }}>Best version of my journey</div>
                        </div>
                        <div style={{ paddingTop: "5%", paddingBottom: "2%", width: "100%", display: "flex" }}>
                            <img src={old1} style={{ width: "100%", height: "380.35px", padding: "5px", position: "static" }} />
                        </div>
                    </div>
                    <img src={break1} style={{ width: "100%" }} />
                    <div style={{ display: "block", background: "white" }}>
                        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", minWidth: "100%" }}>
                            <div style={{ color: "black", fontSize: "42px", fontWeight: "500", justifyContent: "center" }}>REPROGRAM FOR</div>
                            <div style={{ color: "#D80000", fontSize: "42px", fontWeight: "500", justifyContent: "center", paddingLeft: "10px" }}> SUCCESS</div>
                        </div>
                        <div className="grid-containerup  " style={{ paddingLeft: "15%", paddingRight: "15%", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center" }}>

                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#F4F4F4", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={human} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "black", fontSize: "22px", fontWeight: "400", alignContent: "center", paddingLeft: "20px", textAlign: "left" }}>REPROGRAM YOUR MIND AND BODY</div>
                                    </div>


                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#F4F4F4", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={girl} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "black", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>REPLACE BAD HABITS WITH DAILY WINS</div>
                                    </div>

                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#F4F4F4", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={letter} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "black", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>ESTABLISH ROUTINES THAT SET YOU UP FOR SUCCESS</div>
                                    </div>


                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#F4F4F4", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={run} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "black", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>CATAPULT YOUR LIFE TO NEW HEIGHTS</div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <img src={break2} style={{ width: "100%", color: "black" }} />
                    <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", minWidth: "100%" }}>
                        <div style={{ color: "white", fontSize: "38px", fontWeight: "500", justifyContent: "center" }}>BENEFITS</div>
                    </div>
                    <div className="grid-container" style={{ paddingLeft: "15%", paddingRight: "15%", paddingBottom: "10px", paddingTop: "10px", justifyContent: "center" }}>

                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "75px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human5} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>

                                <div style={{ color: "white", fontSize: "20px", fontWeight: "400" }}>SPIRITUAL GROWTH</div>
<div style={{paddingTop:"15px"}}>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC" }}>
                                Develop a better relationship with God
                                </div>
                                </div>
                                <div style={{display:"flex",alignContent:"center"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Increase spiritual awareness and connection
                                </div>
                                </div>
</div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "75px", textAlign: "center" }} >

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human5} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "20px", fontWeight: "400" }}>MENTAL RESILINCE</div>
                                <div style={{paddingTop:"15px"}}>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC" }}>
                                Enhance your mental toughness
                                </div>
                                </div>
                                <div style={{display:"flex",alignContent:"center"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Adopt a positive mindset and eliminate limiting beliefs
                                </div>
                                </div>
</div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "60px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human5} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>

                                <div style={{ color: "white", fontSize: "20px", fontWeight: "400" }}>SELF-IMPROVEMENT</div>
                                <div style={{paddingTop:"15px"}}>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC" }}>
                                Cultivate a better relationship with yourself
                                </div>
                                </div>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Increase self-awareness and emotional intelligence
                                </div>
                                </div>
</div> <div style={{display:"flex",alignContent:"center"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Practice mindfulness and meditation
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid-container3" style={{ paddingLeft: "30%", paddingRight: "30%", paddingBottom: "10px", paddingTop: "10px", justifyContent: "center" }}>

                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "60px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human5} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>

                                <div style={{ color: "white", fontSize: "20px", fontWeight: "400" }}>FINANCIAL SUCCESS</div>
                                <div style={{paddingTop:"15px"}}>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC" }}>
                                Achieve more money and financial stability
                                </div>
                                </div>
                                <div style={{display:"flex",alignContent:"center"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Develop habits that lead to financial growth
                                </div>
                                </div>
</div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "70px", textAlign: "center" }} >

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human5} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "20px", fontWeight: "400" }}>BETTER RELATIONSHIPS</div>
                                <div style={{paddingTop:"15px"}}>
                                <div style={{display:"flex",alignContent:"center",paddingBottom:"10px"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC" }}>
                                Improve connections with others
                                </div>
                                </div>
                                <div style={{display:"flex",alignContent:"center"}}>
                                <img src={arrow1} style={{ width: "20px", height: "20px"}} />
                                <div style={{ color: "#CCCCCC",textAlign:"left" }}>
                                Build healthy, supportive relationships
                                </div>
                                </div>
</div>
                            </div>
                        </div>


                    </div>

                    <img src={break1} style={{ width: "100%" }} />
                </div>
                <div style={{ background: "white", display: "table-row" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ color: "#D80000", fontSize: "38px", fontWeight: "bold", justifyContent: "center" }}>What do they say about Emanuel Scott Fitness ?</div>
                    </div>
                    <div className="grid-containerD" style={{ justifyContent: "center", paddingLeft: "8%", paddingRight: "8%" }}>
                        <div style={{ paddingRight: "2%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                            <img id="arrow1" src={arrow} style={{ width: "240px", height: "65px", paddingLeft: "1%" }} /></div>
                        <div id="data" style={{
                            background: "#F6F6F6", padding: "20px"
                        }} >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={star} style={{ width: "200px", height: "109px", padding: "5px", top: "2882.6px", left: "639px", position: "static" }} />
                            </div>
                            <div style={{ color: "#000000", fontSize: "32px", fontWeight: "500", display: "flex", justifyContent: "center", padding: "20px", textAlign: "center" }}>Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={profile} style={{ width: "73px", height: "73px", padding: "5px", top: "2938px", left: "685px", position: "static" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>

                                <div style={{ color: "#000000", fontSize: "22px", fontWeight: "500", justifyContent: "center" }}>Breyana K</div>
                            </div>
                        </div>
                        <div id="data1" style={{ background: "#F6F6F6", padding: "20px" }} >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={star} style={{ width: "200px", height: "109px", padding: "5px", top: "2882.6px", left: "639px", position: "static" }} />
                            </div>
                            <div style={{ color: "#000000", fontSize: "32px", fontWeight: "500", display: "flex", justifyContent: "center", padding: "20px", textAlign: "center" }}>Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={profile} style={{ width: "73px", height: "73px", padding: "5px", top: "2938px", left: "685px", position: "static" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>

                                <div style={{ color: "#000000", fontSize: "22px", fontWeight: "500", justifyContent: "center" }}>Breyana K</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", paddingLeft: "2%" }}>
                            <img id="arrow2" src={arrowF} style={{ width: "240px", height: "65px", paddingLeft: "2%" }} /></div>
                    </div>



                    <img src={break2} style={{ width: "100%", color: "black" }} />

                </div>
                <div style={{ paddingBottom: "20px", background: "black", display: "table-row" }}>
                    <div className="blog" >
                        <header className="blog-header">
                            <h1>BLOG</h1>
                        </header>
                        <div className="blog-posts" >
                            {posts.map((post, index) => (
                                <div className="blog-post" key={index}>
                                    <div className="image-container">
                                        <img src={post.image} alt={post.title} className="post-image" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div className="blog-post-info">
                                        <div className="blog-post-category">{post.category}</div>
                                        <h2>{post.title}</h2>
                                        <div className="blog-post-meta">
                                            <div className="author-meta">
                                                <div className="author-image">
                                                    <img src={owner} alt={post.author} width={40} height={40} />
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
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default About