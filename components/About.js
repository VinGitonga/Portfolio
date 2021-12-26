const About = () => {
    return (
        <section id="about" className="mt-20">
            <div className="container grid grid-cols-1 gap-0 justify-between items-center h-full md:grid md:grid-cols-2 md:gap-12 ">
                <div>
                    <h1 className="sectionTitle">About Me</h1>
                    <div className="sectionTitleBorderBottom" />
                    <div className="">
                        <p className="my-3 mx-0 text-gray-500 text-xl">I am a Full Stack Developer. I have built various projects both during my free time and in
                            hackathons
                            with JavaScript, React, Node, Python. I am consantly eager to learn, highly adaptable and goal
                            driven
                        </p>
                        <p className="my-3 mx-0 text-gray-500 text-xl">
                            When am not coding, I go to diffrent meetup circles, visit friends, do cycling and netflixing.
                        </p>
                    </div>
                    <div className="my-6">
                        <a href="#contact" className="showcaseBtn">Contact Me</a>
                        <a href="/tech/ResumeVin.pdf" target="_blank" className="showcaseBtn">View my Resume</a>
                    </div>
                </div>
                <img src="/images/img1.jpg" alt="profile img" className="w-96 h-96 rounded-full md:ml-24 mx-auto" />
            </div>
        </section>
    )
}

export default About
