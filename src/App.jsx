import BackTop from "./BackTop";
import emailjs from "@emailjs/browser";
import { useRef } from "react";



emailjs.init("RjChyRtl7U1TzHN7a");

function App() {
  const STYLE = {
    hover: `mr-5 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[2px] after:bg-teal-500`,
    icon: `text-[18px] text-white bg-[#8F8F7A] rounded`,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7zwnj39", "contact_form_portfolio", form.current)
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.error("Failed to the send form", error);
        }
      );
  };

  return (
    <>
      <header className="text-blue-950  bg-rose-200">
        <div className="container flex mx-auto pb-3 pt-0 flex-col md:flex-row items-center ">
          <a href="#" className="font-medium text-blue-950 mb-4 md:mb-0">
            <span className="text-xl ">
              <img
                className="mt-3 2xl:pl-20 xl:pl-10"
                src="./img/logo.svg"
                alt="logo-nao"
              />
            </span>
          </a>

          <nav className="md:ml-auto text-base ">
            <a href="#home" className={STYLE.hover}>
              home
            </a>

            <a href="#projects" className={STYLE.hover}>
              projects
            </a>
            <a href="#skills" className={STYLE.hover}>
              skills
            </a>
            <a href="#contact" className={STYLE.hover}>
              contact
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto my-auto 2xl:py-20 2xl:px-20 lg:py-10 lg:px-10 flex-col md:flex-row items-center justify-center px-5 py-5 ">
          <div className="md:w-1/2 flex-grow 2xl:mb-16 xl:mb-8 mb-4 lg:pr-20 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl 2xl:mt-20 xl:mt-20 mt-5 sm:text-6xl text-blue-950 font-medium, 2xl:mb-4 xl:mb-2 mb-1">
              Nao Nakagawa{" "}
            </h1>
            <br />
            <p className="text-3xl sm:text-6xl text-teal-400 font-medium, mb-6">
              {" "}
              Frontend Web Developer
            </p>
            <p className="mb-12 leading-relaxed">
              Hello! I&lsquo;m Nao Nakagawa. A Web Developer + Designer based in
              Düsseldorf, Germany. I&lsquo;m currently attending Digital Career
              Institute, Web Development course and I will graduate there in
              March 2024. I have a passion for all things technology and design,
              from software engineering to UI/UX. This includes graphics and
              also illustrations!
            </p>
            <a href="https://drive.google.com/file/d/1ZIbLklQ0fGQVeNJ4nQ9Y4ALsFN2Bopae/view?usp=sharing" target="blank">
            <button className="text-white bg-rose-500 py-2 px-6 border-0 rounded text-lg hover:bg-rose-600 duration-300">
              VIEW CV
            </button></a>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon-green.svg"></img>
          </div>
        </div>
      </section>
      <section className=" bg-yellow-200">
        <div className="container 2xl:py-20 2xl:px-20 lg:py-10 lg:px-10 mx-auto pb-10">
          <div className="text-center mb-10">
            <h1
              className="2xl:pt-1 ml-3 text-2xl mb-2 text-blue-950 pt-10"
              id="projects"
            >
              Projects
            </h1>
          </div>

          {/* card div */}
          <div className=" grid-cols-1 sm:grid md:grid-cols-2">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="../public/img/pizzareview.jpg"
                  alt="pizzareview"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-gray-700">
                  Pizza Review
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-gray-700">
                  It is no exaggeration to say that ordering pizza for delivery
                  is a savior for working people, but many people cannot
                  remember the quality of the restaurant and the pizza. This
                  blogging platform allows you to store the data of critiques at
                  any time by registering.
                </p>

                <div className="flex container mx-auto pt-2 justify-center">
                  <a href="https://github.com/nao-nkgw/mern-pizza-blog-frontend" target="blank">
                    <svg
                      className="h-8 w-8 text-red-500 mr-4 hover:text-rose-800 hover:scale-110 hover:duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>{" "}
                  </a>
                  <a href="https://nao-nkgw-pizza-review.netlify.app/" target="blank">
                    <svg
                      className="h-8 w-8 text-red-500 hover:text-rose-800 hover:scale-110 hover:duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <circle cx="12" cy="12" r="10" />{" "}
                      <line x1="2" y1="12" x2="22" y2="12" />{" "}
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="../public/img/weatherapp.jpg"
                  alt="weatherapp"
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-gray-700">
                  Weather App
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-gray-700">
                  I wonder what the weather is like now in that city where I
                  spent my vacation? Enter the name of the town in English and
                  you will get the weather information along with a background
                  of images appropriate for that weather.
                </p>

                <div className="flex container mx-auto pt-2 justify-center">
                  <a href="https://github.com/nao-nkgw/weather-app" target="blank">
                    <svg
                      className="h-8 w-8 text-red-500 mr-4 hover:text-rose-800 hover:scale-110 hover:duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>{" "}
                  </a>
                  <a href="https://nao-nkgw-weather.netlify.app" target="blank">
                    <svg
                      className="h-8 w-8 text-red-500 hover:text-rose-800 hover:scale-110 hover:duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <circle cx="12" cy="12" r="10" />{" "}
                      <line x1="2" y1="12" x2="22" y2="12" />{" "}
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Skills Section */}
      <section className="">
        <div className="container 2xl:py-20 2xl:px-20 lg:py-10 lg:px-10 pb-0 mx-auto ">
          <div className="text-center mb-10 mt-10">
            <h1 className=" ml-3 text-2xl mb-2 text-blue-950" id="skills">
              Skills
            </h1>
          </div>

          <div className="flex container mx-auto selection:md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex-grow mb-4 lg:pr-24 md:pr-16 text-center md:text-left">
              <h2 className="2xl:ml-3 2xl:text-2xl text-xl ">Tech stack</h2>
            </div>
          </div>

          {/* card div */}
          <section className=" grid grid-cols-3 gap-x-3 gap-y-5  sm:grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/js.jpg"
                  alt="React"
                />
              </div>
              <p className=" pt-1 ">JavaScript</p>
            </div>

            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/react.jpg"
                  alt="React"
                />
              </div>
              <p className=" pt-1 ">React</p>
            </div>

            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/html.jpg"
                  alt="HTML5"
                />
              </div>
              <p className=" pt-1 ">HTML5</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/css.jpg"
                  alt="CSS3"
                />
              </div>
              <p className=" pt-1 ">CSS3</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/sass.jpg"
                  alt="Saas"
                />
              </div>
              <p className=" pt-1 ">Saas</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/tailwind.jpg"
                  alt="Tailwind CSS"
                />
              </div>
              <p className=" pt-1 ">Tailwind CSS</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/bootstrap.jpg"
                  alt="Bootstrap"
                />
              </div>
              <p className=" pt-1 ">Bootstrap</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/ts.jpg"
                  alt="TypeScript"
                />
              </div>
              <p className=" pt-1 ">TypeScript</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/nodejs.jpg"
                  alt="Node JS"
                />
              </div>
              <p className="pt-1 ">Node JS</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/ex.jpg"
                  alt="Express JS"
                />
              </div>
              <p className="pt-1 ">Express JS</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/mongo.jpg"
                  alt="Mongo DB"
                />
              </div>
              <p className="pt-1">Mongo DB</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/github.jpg"
                  alt="GitHub"
                />
              </div>
              <p className="pt-1">GitHub</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/vs.jpg"
                  alt="VS Code"
                />
              </div>
              <p className="pt-1 ">VS Code</p>
            </div>
          </section>
        </div>
        <div className="container 2xl:py-20 2xl:px-20 lg:py-10 lg:px-10 pb-10 mx-auto">
          <div className="text-center"></div>
          <div className="flex container mx-auto selection:md:flex-row items-center justify-center">
            <div className="md:w-1/2 flex-grow mb-4 lg:pr-24 md:pr-16 text-center md:text-left">
              <h2 className="2xl:ml-3 2xl:text-2xl text-xl mt-5">Others</h2>
            </div>
          </div>

          {/* card div */}
          <section className="grid grid-cols-3 gap-x-3 gap-y-5  sm:grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/figma.svg"
                  alt="Figma"
                />
              </div>
              <p className="pt-1 ">Figma</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/ai.jpg"
                  alt="Illustrator"
                />
              </div>
              <p className="pt-1 ">Illustrator</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/ps.jpg"
                  alt="Photoshop"
                />
              </div>
              <p className="pt-1 ">Photoshop</p>
            </div>
            <div className=" mx-0 mt-0 self-start text-center">
              <div className=" mx-3 mt-6  self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-white sm:shrink-0 sm:grow sm:basis-0">
                <img
                  className="flex rounded-lg"
                  src="./img/pro.jpg"
                  alt="Procreate"
                />
              </div>
              <p className="pt-1">Procreate</p>
            </div>
          </section>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section>
        <div className=" bg-teal-200">
          <div className="container 2xl:py-20 2xl:px-20 lg:py-10 lg:px-10 pb-10 mx-auto pt-10">
            <div className="grid lg:grid-cols-3 max-lg:justify-center h-full max-sm:px-4">
              <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                <h2
                  className="text-2xl sm:text-3xl font-medium mb-2 text-blue-950"
                  id="contact"
                >
                  Get In Touch
                </h2>
                <p className="text-sm text-blue-950 mt-4">
                  Have a specific inquiry or looking to explore new
                  opportunities? I&lsquo;ll be happy to talk with you!
                </p>
                <form
                  ref={form}
                  className="'cf' ref={form} onSubmit={sendEmail} mx-auto mt-8 bg-white rounded-lg py-6 px-4 shadow-md"
                >
                  <input
                    name="to_name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md h-12 px-6 bg-white text-sm mb-4 outline-none"
                  />
                  <input
                    name="from_name"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md h-12 px-6 bg-white text-sm mb-4 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md h-12 px-6 bg-white text-sm mb-4 outline-none"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    className="w-full rounded-md px-6 bg-white text-sm pt-3 outline-none"
                  ></textarea>
                  <input
                    onClick={sendEmail}
                    type="submit"
                    className="text-[#333] bg-teal-200 hover:bg-teal-300 font-semibold rounded-md text-sm px-6 py-3 block w-full mt-3"
                    value="Send Message"
                  />
                </form>
              </div>
              <div className="z-10 relative lg:col-span-2">
                <img
                  src="./img/contact-icon-w.svg"
                  className="2xl:py-0 2xl:px-auto  lg:py-0 lg:px-20 pb-10 mx-auto pt-10 w-3/4 my-auto "
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full overflow-x-hidden">
            <BackTop />

          </div>

        </div>
      </section>

      {/* footer section */}
      <section className="container　 3xl:py-0 3xl:px-0 3xl:py-0 2xl:px-0 lg:py-0 lg:px-0 px-5  bg-blue-950">
        <footer className=" footer my-auto mx-auto ">
          <div className="footer-section  my-auto mx-auto">
            <div className="grid max-lg:grid-cols-5 justify-center lg:grid-cols-5 lg:justify-center md:grid-cols-5 md:justify-center max-sm:px-4">
              <p className="container flex lg:text-base px-auto my-auto font-medium justify-center pr-7 text-white  md:text-xs md:pl-10 md:px-auto md:py-auto  md:font-medium ">
                Let&lsquo;s connect
              </p>
              <div className="container flex my-auto mx-auto mr-15 ">
                <a href="https://www.linkedin.com/in/nao-nkgw/" target="blank">
                  <svg
                    className="w-6 h-6 text-white mr-1 my-auto mx-auto  hover:text-yellow-400 hover:scale-110 hover:duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clipRule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </a>

                <a href="https://github.com/nao-nkgw" target="blank">
                  <svg
                    className="w-6 h-6 text-white ml-5 my-auto mx-auto  hover:text-yellow-400 hover:scale-110 hover:duration-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div></div>
              <div></div>

              <div className="text-xs px-auto  pt-2">
                <p className="container flex pr-20 lg:text-base px-auto my-auto pb-5 pt-3 font-medium justify-en text-white md:text-xs md:pl-10 md:px-auto md:pb-5 md:pt-3 md:xs text-end ">
                  ©2023 Nao Nakagawa
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
