'use client'

import React from "react";

import './about.css'

import Footer from "../Footer/page";
import Customer from "../Cardio/Customer/page";

function About() {

    const posts = [

        {
            title: 'Top 5 Cardio Workouts to Boost Stamina and Burn Fat',
            date: 'July 18, 2024',
            image: "./author.png",
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
        {
            title: 'Strength Training for Beginners: Your First Steps to an Ideal Body',
            date: 'July 18, 2024',
            image: "./author1.png",
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
        {
            title: 'How to Effectively Combine Yoga and Fitness for Optimal Results',
            date: 'July 18, 2024',
            image: " ./author2.png",
            category: 'Fitness',
            author: 'Emanuel Scott',
        },
    ];

    return (
        <>
            <div style={{ fontFamily: "Oswald" }}>
                
                <div style={{ background: "black", display: "table-row", overflow: "hidden" }}>
                    <div style={{ position: "relative" }}>
                        <div className="grid-container-top  container" style={{ paddingBottom: "30px", paddingTop: "30px", minWidth: "100%" }}>
                            <div id="intro1" style={{ paddingLeft: "20%" }}>
                                <div style={{ justifyContent: "left", minWidth: "100%" }}>
                                    <div style={{ display: "block", paddingLeft: "10%" }}>
                                        <div id="image1">
                                            <img src="./younges.png" style={{ width: "320.06px", height: "404.53px", padding: "5px" }} />
                                        </div>
                                        <div id="image2">
                                            <img src="./emanual3.png" style={{ width: "314px", height: "438px", padding: "5px" }} />
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
                                <img src="./insta.png" style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src="./tiktok.png" style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src="./X.png" style={{ width: "60px", height: "45px", padding: "5px" }} />
                                <img src="./facebook.png" style={{ width: "60px", height: "45px", padding: "5px" }} />
                                </div>
                            </div>


                            <div id="intro2" style={{ paddingLeft: "15%" }}>
                                <div style={{ justifyContent: "left", minWidth: "100%" }}>
                                    <div style={{ display: "block" }}>
                                        <div id="image1">
                                            <img src="./emanual5.png" style={{ width: "278.95px", height: "350.38px", padding: "5px" }} />
                                        </div>
                                        <div id="image2">
                                            <img src="./Emanuel1.png" style={{ width: "346px", height: "150px", padding: "5px" }} />
                                        </div>
                                        <div id="image3">
                                            <img src="./emanual6.png" style={{ width: "306.13", height: "345.32px", padding: "5px" }} />
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
                            <img src="./image.png" style={{ width: "100%", height: "380.35px", padding: "5px", position: "static" }} />
                        </div>
                    </div>
               
                    <div style={{ display: "block", background: "black" }}>
                        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", minWidth: "100%" }}>
                            <div style={{ color: "white", fontSize: "42px", fontWeight: "500", justifyContent: "center" }}>REPROGRAM FOR</div>
                            <div style={{ color: "#D80000", fontSize: "42px", fontWeight: "500", justifyContent: "center", paddingLeft: "10px" }}> SUCCESS</div>
                        </div>
                        <div className="grid-containerup  " style={{ paddingLeft: "15%", paddingRight: "15%", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center" }}>

                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#0C0C0C", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src= "./flex.png" style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "white", fontSize: "22px", fontWeight: "400", alignContent: "center", paddingLeft: "20px", textAlign: "left" }}>REPROGRAM YOUR MIND AND BODY</div>
                                    </div>


                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#0C0C0C", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src="./curl.png" style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "white", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>REPLACE BAD HABITS WITH DAILY WINS</div>
                                    </div>

                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#0C0C0C", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src="./check.png" style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "white", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>ESTABLISH ROUTINES THAT SET YOU UP FOR SUCCESS</div>
                                    </div>


                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <div style={{ background: "#0C0C0C", padding: "20px", textAlign: "center" }} >
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src="./run.png" style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                        <div style={{ color: "white", fontSize: "22px", fontWeight: "400", alignContent: "center" }}>CATAPULT YOUR LIFE TO NEW HEIGHTS</div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", paddingTop: "10px", display: "flex", justifyContent: "center", minWidth: "100%" }}>
                        <div style={{ color: "white", fontSize: "38px", fontWeight: "500", justifyContent: "center" }}>BENEFITS</div>
                    </div>

                    <div className="flex flex-col ">
                        <div className="flex flex-row flexCenter gap-x-5 ">
                     
                                <div className="box w-[348px] h-[268px] py-2  bg-[#0C0C0C] text-center flex flex-col items-center ">
                                    <img  src="./dumbbell.png" className="w-[60px] h-[60px] mt-5"/>
                                    <h1 className="uppercase text-white text-[20px]">
                                    Spiritual Growth
                                    </h1>
                                    <div className="flex flex-row gap-x-2 mt-4">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">Develop a better relationship with God</p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Increase spiritual awareness and connection</p>
                                    </div>
                                </div>


                                <div className="box w-[348px] h-[268px] py-2 px-5  bg-[#0C0C0C] text-center flex flex-col items-center ">
                                    <img  src="./dumbbell.png" className="w-[60px] h-[60px] mt-5"/>
                                    <h1 className="uppercase text-white text-[20px]">
                                    Mental Resilience
                                    </h1>
                                    <div className="flex flex-row gap-x-2 mt-4">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Enhance your mental toughness
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2 ">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Adopt a positive mindset and eliminate limiting beliefs</p>
                                    </div>
                                </div>

                                <div className="box w-[348px] h-[268px] py-2  bg-[#0C0C0C] text-center flex flex-col items-center ">
                                    <img  src="./dumbbell.png" className="w-[60px] h-[60px] mt-5"/>
                                    <h1 className="uppercase text-white text-[20px]">
                                    Self-Improvement
                                    </h1>
                                    <div className="flex flex-row gap-x-2 mt-4">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Cultivate a better relationship with yourself
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Increase self-awareness and emotional intelligence
                                    </p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Practice mindfulness and meditation
                                    </p>
                                    </div>
                                </div>
                        </div>

                            <div className="flex flex-row flexCenter mt-5 gap-x-5">
                            <div className="box w-[348px] h-[268px] py-2  bg-[#0C0C0C] text-center flex flex-col items-center ">
                                    <img  src="./dumbbell.png" className="w-[60px] h-[60px] mt-5"/>
                                    <h1 className="uppercase text-white text-[20px]">
                                    Financial Success
                                    </h1>
                                    <div className="flex flex-row gap-x-2 mt-4">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Achieve more money and financial stability
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Develop habits that lead to financial growth
                                    </p>
                                    </div>
                                </div>

                                <div className="box w-[348px] h-[268px] py-2  bg-[#0C0C0C] text-center flex flex-col items-center ">
                                    <img  src="./dumbbell.png" className="w-[60px] h-[60px] mt-5"/>
                                    <h1 className="uppercase text-white text-[20px]">
                                    Better Relationships
                                    </h1>
                                    <div className="flex flex-row gap-x-2 mt-4">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Improve connections with others
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-x-2 mt-2">
                                    <img  src="./arrow.png" className="w-[10px] h-[10px] mt-2.5"/>
                                    <p className="text-white text-[18px] font-light">
                                    Build healthy, supportive relationships
                                    </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                

                    <img src="./break.png" style={{ width: "100%" }} />
                </div>
                <div style={{ background: "white", display: "table-row" }}>
                   <Customer/>

                    <img src="./breakdown.png" style={{ width: "100%", color: "black" }} />

                </div>
                <div style={{ paddingBottom: "20px", background: "black", display: "table-row" }}>
                <div className='flex flex-col mt-8'>
        <span className='text-white uppercase font-bold text-center text-[38px]'>
            blog
        </span>
        
        <div className='flex flex-row flexBetween mt-10'>

            <div className='flex flex-col ml-20 mb-10'>
                <img src='./es.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[297px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                Top 5 Cardio Workouts to Boost Stamina and Burn Fat
                </span>
                </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                    </p>

             `<p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='flex flex-col mb-10'>
                <img src='./es2.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[364px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                Strength Training for Beginners: Your First Steps to an Ideal Body                </span>
                </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                </p>
                <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='flex flex-col mr-20 mb-10'>
                <img src='./es3.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[389px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                How to Effectively Combine Yoga and Fitness for Optimal Results
                </span>
                    </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                </p>
                <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>
        </div>
    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default About