"use client";

import Commit from "./Commitment/page";
import Rating from "./Rating/page";
import Blog from "./Blog/page";
import Reprogram from "../Home/Reprogram/page";
import Footer from "../Footer/page";

const About = () => {
  return (
    <main className="bg-black overflow-x-hidden relative scroll-smooth">
      <div className="flex flex-col flexCenter">
        <img
          src="./aboutmobile.png"
          className="sm:mt-12 2xl:invisible xl:invisible 2xl:w-[0] 2xl:h-[0] xl:w-[0] xl:h-[0] sm:visible"
        />
        <p className="text-[#D80000] uppercase text-[28px] mt-12 text-center">
          our founder
        </p>

        <h1 className="uppercase text-[44px] font-medium text-white mt-1 text-center">
          emanuel scott
        </h1>

        <div className="flex flex-row flexCenter gap-x-14 ">
          <img
            src="/about1.png"
            className="2xl:visible xl:visible lg:visible sm:invisible 2xl:w-[321px] xl:w-[321px] lg:w-[321px] sm:w-0"
          />

          <div className="box 2xl:w-[636px] xl:w-[636px] sm:w-[360px] h-[679px] text-white text-wrap font-light mb-48 ml-6 sm:ml-0 2xl:text-[20px] xl:text-[20px] sm:text-[12px] text-center">
            <div></div>
            <p className="indent-3">
              Hi, my name is Emanuel Scott, and my journey to health and
              self-improvement has been far from conventional. My family and I
              spent several years homeless, living with various friends and
              constantly moving from place to place. This period of instability
              meant frequently changing schools and struggling to find a sense
              of normalcy. When I was 14, life took another hard turn—I was
              kicked out and continued to move from one friend’s house to
              another.
            </p>

            <p className="mt-5 indent-3">
              I Graduated from high school in 2012 with dreams of joining the
              NFL. While I diligently worked on my body and skills, life had
              other plans. In 2016, I joined the Air Force and proudly served
              for four years. During my service, I earned a BA in Communication
              Studies.
            </p>

            <p className="mt-5 indent-3">
              In 2020, I moved to Dallas during the COVID-19 pandemic, seeking
              new growth opportunities. I completed a software developer boot
              camp, becoming a full stack developer, while concurrently earning
              an MBA from the University of Northern Colorado.
            </p>

            <p className="mt-5 indent-3">
              Throughout this journey, I have dedicated myself to personal
              development, focusing on physical conditioning, mental acuity,
              financial stability, and spiritual enlightenment. Balancing these
              areas proved challenging, but it taught me the importance of
              non-negotiables.
            </p>

            <p className="mt-5 indent-3">
              Engaging our bodies is fundamental to our growth and well-being.
              Our bodies are the foundation of our overall health, and by
              focusing on physical fitness, we lay the groundwork for improved
              mental clarity, emotional resilience, and spiritual growth.
              Prioritizing physical health helps us feel strong, confident, and
              energized, equipping us to tackle life’s challenges. When you look
              good, you naturally feel more confident; by training your body to
              handle tough tasks, you reprogram it to embrace its new potential.
            </p>

            <p className="mt-5 indent-3 ">
              Overall, this journey requires us to understand that starting is
              the key to opening ourselves to new possibilities that our old
              selves couldn’t even imagine. My holistic approach to fitness
              addresses all aspects of wellness, guiding others towards a
              balanced and fulfilling life.
            </p>

            <p className="text-[#D80000] text-[28px] mt-6 ">
              Welcome to Emanuel Scott Fitness, where I strive to help others
              transform their lives through fitness and holistic wellness.
            </p>

            <div className="flex flex-row gap-x-2 flexCenter mt-6">
              <div className="box w-[50px] h-[50px] border-[#222222] bg-[#222222] border hover:bg-[#D80000]">
                <a
                  href="#"
                  className="flexCenter mt-1 text-gray-500 hover:text-white "
                >
                  <svg
                    className="w-[40px] h-[40px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="box w-[50px] h-[50px] border-[#222222] bg-[#222222] border hover:bg-[#D80000]">
                <a
                  href="#"
                  className="p-1 flex items-center borderjustify-center transition-all duration-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <path
                      d="M50.0783 22.6244C49.7746 22.4674 49.4789 22.2953 49.1924 22.1088C48.3592 21.5579 47.5952 20.9089 46.9171 20.1756C45.2202 18.2341 44.5864 16.2644 44.353 14.8853H44.3624C44.1674 13.7406 44.248 13 44.2602 13H36.5314V42.8856C36.5314 43.2869 36.5314 43.6834 36.5146 44.0753C36.5146 44.1241 36.5099 44.1691 36.5071 44.2216C36.5071 44.2431 36.5071 44.2656 36.5024 44.2881C36.5024 44.2938 36.5024 44.2994 36.5024 44.305C36.4209 45.3773 36.0772 46.4131 35.5014 47.3214C34.9257 48.2297 34.1355 48.9825 33.2005 49.5138C32.226 50.0681 31.1238 50.359 30.0027 50.3575C26.4017 50.3575 23.4833 47.4213 23.4833 43.795C23.4833 40.1688 26.4017 37.2325 30.0027 37.2325C30.6843 37.2319 31.3618 37.3391 32.0099 37.5503L32.0192 29.6809C30.0518 29.4268 28.053 29.5832 26.149 30.1402C24.245 30.6972 22.477 31.6427 20.9567 32.9172C19.6246 34.0746 18.5047 35.4557 17.6474 36.9981C17.3211 37.5606 16.0902 39.8209 15.9411 43.4894C15.8474 45.5716 16.4727 47.7288 16.7708 48.6203V48.6391C16.9583 49.1641 17.6849 50.9556 18.8689 52.4659C19.8237 53.6774 20.9518 54.7417 22.2167 55.6244V55.6056L22.2355 55.6244C25.9771 58.1669 30.1255 58 30.1255 58C30.8436 57.9709 33.2492 58 35.9811 56.7053C39.0111 55.27 40.7361 53.1316 40.7361 53.1316C41.8381 51.8538 42.7144 50.3977 43.3274 48.8256C44.0267 46.9872 44.2602 44.7822 44.2602 43.9009V28.0459C44.3539 28.1022 45.6027 28.9281 45.6027 28.9281C45.6027 28.9281 47.4017 30.0813 50.2086 30.8322C52.2224 31.3666 54.9355 31.4791 54.9355 31.4791V23.8066C53.9849 23.9097 52.0546 23.6097 50.0783 22.6244Z"
                      fill="#AAAAAA"
                    />
                  </svg>
                </a>
              </div>

              <div className="box w-[50px] h-[50px] border-[#222222] bg-[#222222] border hover:bg-[#D80000]">
                <a
                  href="#"
                  className="p-1 flex items-center borderjustify-center transition-all duration-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 72 72"
                    fill="white"
                  >
                    <path
                      d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                      fill="#AAAAAA"
                    />
                  </svg>
                </a>
              </div>

              <div className="box w-[50px] h-[50px] border-[#222222] bg-[#222222] border hover:bg-[#D80000]">
                <a
                  href="#"
                  className="flexCenter mt-1 text-gray-500 hover:text-white"
                >
                  <svg
                    className="w-[40px] h-[40px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <img
            src="/about2.png"
            className="2xl:visible xl:visible lg:visible sm:invisible 2xl:w-[334px] xl:w-[334px] lg:w-[334px] sm:w-0"
          />
        </div>
      </div>

      <h1 className="font-medium 2xl:text-[48px] xl:text-[48px] sm:text-[32px] text-white 2xl:mt-60 xl:mt-60 lg:mt-40 text-center uppercase">
        Best version of my journey
      </h1>

      <img src="./journey.png" className="mt-12 w-screen " />

      <h1 className="font-medium text-[38px] sm:text-[28px] text-white mt-20 text-center uppercase">
        benefits
      </h1>

      <div className="flex flex-row flexCenter gap-x-4 mt-4 flex-wrap sm:gap-y-4">
        <div className="box w-[348px] h-[268px] bg-[#0C0C0C] flex flex-col text-center items-center py-6">
          <img src="./d.png" />
          <p className="text-[20px] text-white uppercase mt-2">
            spiritual growth
          </p>

          <div className="flex flex-row gap-x-2 mt-4">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px]">
              Develop a better relationship with God
            </p>
          </div>
          <div className="flex flex-row gap-x-2 ml-8 mt-2">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px] ">
              Increase spiritual awareness and connection
            </p>
          </div>
        </div>

        <div className="box w-[348px] h-[268px] bg-[#0C0C0C] flex flex-col text-center items-center py-6  ">
          <img src="./d.png" />
          <p className="text-[20px] text-white uppercase mt-2">
            Mental Resilience
          </p>

          <div className="flex flex-row gap-x-2 mt-4">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px]">
              Enhance your mental toughness
            </p>
          </div>
          <div className="flex flex-row gap-x-2 mt-2 flexCenter">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px]">
              Adopt a positive mindset and eliminate limiting beliefs
            </p>
          </div>
        </div>

        <div className="box w-[348px] h-[268px] bg-[#0C0C0C] flex flex-col text-center items-center py-6 ">
          <img src="./d.png" />
          <p className="text-[20px] text-white uppercase">Self-Improvement</p>

          <div className="flex flex-row gap-x-2 mt-4">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px]">
              Develop a better relationship with God
            </p>
          </div>
          <div className="flex flex-row gap-x-2 ml-8 mt-2">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px] ">
              Increase spiritual awareness and connection
            </p>
          </div>
        </div>

        <div className="box w-[348px] h-[268px] bg-[#0C0C0C] flex flex-col text-center items-center py-6">
          <img src="./d.png" />
          <p className="text-[20px] text-white uppercase mt-2">
            Financial Success
          </p>

          <div className="flex flex-row gap-x-2 mt-4">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px]">
              Achieve more money and financial stability
            </p>
          </div>
          <div className="flex flex-row gap-x-2  mt-2">
            <img src="./arrow.png" />
            <p className="text-white font-light text-[18px] ">
              Develop habits that lead to financial growth
            </p>
          </div>
        </div>
        <div className="flex flex-row flexCenter gap-x-4 ">
          <div className="box w-[348px] h-[268px] bg-[#0C0C0C] flex flex-col text-center items-center py-6">
            <img src="./d.png" />
            <p className="text-[20px] text-white uppercase mt-2">
              Better Relationships
            </p>

            <div className="flex flex-row gap-x-2 mt-4">
              <img src="./arrow.png" />
              <p className="text-white font-light text-[18px]">
                Improve connections with others
              </p>
            </div>
            <div className="flex flex-row gap-x-2 ml-8 mt-2">
              <img src="./arrow.png" />
              <p className="text-white font-light text-[18px] ">
                Build healthy, supportive relationships
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./aboutline.png"
        className="min-w-screen 2xl:mt-6 xl:mt-12 lg:mt-12 sm:mt-10 sm:w-[1150px]"
      ></img>

      <Commit />

      <Reprogram />
      <Rating />

      <Blog />

      <Footer />
    </main>
  );
};

export default About;
