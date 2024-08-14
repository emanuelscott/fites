import React from "react";
import Navbar from "./navBar";
import break1 from "./assets/break.png";
import "./girls.css"
import Footer from "./fotter";
import human1 from "./assets/human1.png"
import arrow from "./assets/backArrow.png";
import arrowF from "./assets/frontarrow.png";
import break2 from "./assets/breakdown.png";
import star from "./assets/stars1.png"
import profile from "./assets/profile.png"


function GirlSSecction() {
    return (
        <>



            <div style={{fontFamily:"Oswald"}}>

                <div className="backgroundgirls"  >

                    <Navbar />
                    <div style={{ padding: "10%" }}>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "28px", fontWeight: "bold", color: "#D80000" }}>
                            Women's program
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "48px", fontWeight: "bold", color: "white", paddingTop: "10px" }}>
                            Sculpt & Tone Program
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "16px", color: "#CCCCCC", width: "100%", flexWrap: "wrap", flexDirection: "column", justifyItems: "center", paddingLeft: "20%", paddingRight: "18%", paddingTop: "30px", paddingBottom: "20px" }}>
                            Transform your body with a focus on achieving a lean, toned physique through high-energy workouts, strength training, and flexibility exercises. Our program includes personalized life coaching, custom meal plans, and progress tracking, with weekly live check-ins and 24/7 app support.
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                            <button style={{ background: "#BF0A0A", color: "white", fontSize: "16px", alignContent: "center", paddingTop: "18px", paddingBottom: "18px", paddingLeft: "49px", paddingRight: "49px" }}>
                                LET'S START NOW
                            </button>

                        </div>

                    </div>

                </div>
                <div style={{ background: "black", paddingTop: "5%" }}>
                    <div className="grid-container" style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "10px", paddingTop: "10px", justifyContent: "center" }}>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"15%",paddingRight:"15%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>ACHIEVE A LEAN AND TONED PHYSIQUE</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                The Sculpt & Tone Program at Emanuel Scott Fitness is designed to help you achieve a beautifully sculpted, lean, and toned physique. Whether you're looking to trim down, build muscle definition, or simply enhance your overall fitness, our program offers a comprehensive approach to transform your body and boost your confidence.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"20%",paddingRight:"20%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>HIGH-ENERGY WORKOUTS</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Our high-energy workouts are the cornerstone of the Sculpt & Tone Program. These dynamic sessions are designed to burn calories, increase metabolism, and build endurance. With a mix of cardio, circuit training, and high-intensity interval training (HIIT), our workouts keep you engaged and motivated while pushing you towards your fitness goals.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"22%",paddingRight:"22%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>STRENGTH TRAINING</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Building muscle and defining your physique is essential for a toned appearance. Our strength training routines focus on all major muscle groups, with an emphasis on creating a balanced, strong, and proportionate body. From bodyweight exercises to resistance training, we tailor the intensity and complexity of each workout to your fitness level and goals.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"15%",paddingRight:"15%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>FLEXIBILITY EXERCISES</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Incorporating flexibility exercises is crucial for a well-rounded fitness regimen. Our program includes stretching routines and flexibility exercises designed to improve your range of motion, enhance muscle recovery, and prevent injuries. By increasing your flexibility, you'll not only improve your workout performance but also enjoy a more relaxed and comfortable body.
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="grid-container" style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "10px", paddingTop: "10px", justifyContent: "center" }}>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"15%",paddingRight:"15%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>PERSONALIZED LIFE COACHING</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Achieving a toned physique involves more than just physical exercise; it requires a positive mindset and a balanced lifestyle. Our personalized life coaching sessions provide you with the tools and strategies to set realistic goals, overcome obstacles, and maintain motivation. We help you cultivate a lifestyle that supports long-term wellness and fitness success.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"20%",paddingRight:"20%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>CUSTOM MEAL PLANS</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Proper nutrition is vital for sculpting a lean body. Our custom meal plans are designed to fuel your workouts, support muscle recovery, and promote fat loss. We focus on balanced, nutrient-rich meals that are easy to prepare and align with your dietary preferences. Our goal is to provide you with a sustainable eating plan that complements your fitness journey.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"20%",paddingRight:"20%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>PROGRESS TRACKING</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Monitoring your progress is essential for staying on track and achieving your desired results. Our comprehensive progress tracking system includes regular assessments, body measurements, and personalized feedback. We keep you informed of your improvements and adjust your program as needed to ensure continuous progress.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"22%",paddingRight:"22%",textAlign:"center",paddingTop:"20px",paddingBottom:"47px"}}>WEEKLY LIVE CHECK-INS</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Stay accountable and motivated with our weekly live check-ins. These sessions provide an opportunity to discuss your progress, receive expert advice, and make any necessary adjustments to your program. Our trainers are here to support you, answer your questions, and keep you on the path to success.
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="grid-container-content" style={{ paddingLeft: "28%", paddingRight: "28%", paddingBottom: "10px", paddingTop: "10px", justifyContent: "center" }}>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div  style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"15%",paddingRight:"15%",textAlign:"center",paddingTop:"20px",paddingBottom:"45px"}}>ACCESS TO A PRIVATE SUPPORT GROUP</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Access our expert guidance and support anytime with our 24/7 support via app. Whether you need advice on your workout routine, nutritional guidance, or motivation, our team is always available to assist you. This continuous support ensures that you never feel alone on your fitness journey.
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <div style={{ background: "#0C0C0C", padding: "40px", textAlign: "center" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={human1} style={{ width: "60px", height: "60px", padding: "5px", top: "1436px", left: "362px", position: "static" }} />
                                </div>
                                <div style={{ color: "white", fontSize: "24px", fontWeight: "400" ,paddingLeft:"15%",paddingRight:"15%",textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>24/7 SUPPORT VIA App</div>
                                <div style={{ color: "#CCCCCC", fontSize: "20px" }}>
                                Join our exclusive private support group and connect with a community of like-minded individuals who share your fitness goals. This supportive and encouraging environment provides a space to share experiences, celebrate successes, and find inspiration. The camaraderie and accountability from this group will help you stay motivated and committed to your fitness journey.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={break1} style={{ width: "100%" }} />

                    <div style={{ background: "white", display: "table-row" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ color: "#D80000", fontSize: "38px", fontWeight: "bold", justifyContent: "center" }}>What do they say about Emanuel Scott Fitness ?</div>
                        </div>
                        <div className="grid-containerD" style={{ justifyContent: "center", paddingLeft: "8%", paddingRight: "8%" }}>
                            <div style={{ paddingRight: "2%", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                                <img id="arrow1" src={arrow} style={{ width: "240px", height: "65px", paddingLeft: "1%" }} /></div>
                            <div id="data" style={{ background: "#F6F6F6" , padding:"20px" 
                            }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={star} style={{ width: "200px", height: "109px", padding: "5px", top: "2882.6px", left: "639px", position: "static" }} />
                                </div>
                                <div style={{ color: "#000000", fontSize: "38px", fontWeight: "500", display: "flex", justifyContent: "center", padding: "20px", textAlign: "center" }}>Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me</div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={profile} style={{ width: "73px", height: "73px", padding: "5px", top: "2938px", left: "685px", position: "static" }} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>

                                    <div style={{ color: "#000000", fontSize: "22px", fontWeight: "bold", justifyContent: "center" }}>Breyana K</div>
                                </div>
                            </div>
                            <div id="data1" style={{ background: "#F6F6F6" ,padding:"20px" }} >
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={star} style={{ width: "200px", height: "109px", padding: "5px", top: "2882.6px", left: "639px", position: "static" }} />
                                </div>
                                <div style={{ color: "#000000", fontSize: "38px", fontWeight: "500", display: "flex", justifyContent: "center", padding: "20px", textAlign: "center" }}>Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me</div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={profile} style={{ width: "73px", height: "73px", padding: "5px", top: "2938px", left: "685px", position: "static" }} />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>

                                    <div style={{ color: "#000000", fontSize: "22px", fontWeight: "bold", justifyContent: "center" }}>Breyana K</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" ,paddingLeft:"2%"}}>
                                <img id="arrow2" src={arrowF} style={{ width: "240px", height: "65px", paddingLeft: "2%" }} /></div>
                        </div>



                        <img src={break2} style={{ width: "100%", color: "black" }} />

                    </div>
                    <div style={{padding:"40px"}}>
                        <div style={{display:"flex",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"40px",paddingLeft: "40%", paddingRight: "40%", paddingTop: "30px", paddingBottom: "20px",textAlign:"center"}}>
                        TRANSFORM YOUR BODY AND MIND
                        </div>
                        <div style={{display:"flex",justifyContent:"center",color:"white",fontWeight:"300",fontSize:"18px",paddingLeft: "30%", paddingRight: "30%", paddingTop: "30px", paddingBottom: "20px",textAlign:"center"}}>
                        The Sculpt & Tone Program at Emanuel Scott Fitness is more than just a fitness program—it's a complete transformation experience. With expert coaching, personalized support, and a holistic approach, you'll have everything you need to achieve a lean, toned physique and a healthier, more confident you.
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                            <button style={{ background: "#BF0A0A", color: "white", fontSize: "16px", alignContent: "center", paddingTop: "18px", paddingBottom: "18px", paddingLeft: "49px", paddingRight: "49px" }}>
                             SECURE YOUR SPOT NOW
                            </button>

                        </div>
                    </div>
                </div>

<Footer/>
            </div>
        </>
    )
}
export default GirlSSecction