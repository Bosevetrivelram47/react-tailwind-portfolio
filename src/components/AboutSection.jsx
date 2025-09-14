import { Briefcase, Code, Cloudy } from "lucide-react";

export const AboutSection = () => {
    return (
       <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">
                            With hands-on experience at Crayond, I contributed to building responsive and scalable web applications using React.js, Redux, and Zustand. I worked with modern UI libraries like MUI and HeroUI, focusing on clean architecture, reusable components, and optimized performance.
                        </p>

                        <p className="text-muted-foreground">
                            I’m passionate about developing seamless user experiences, integrating APIs for smooth frontend–backend communication, and continuously improving my skills to deliver efficient and reliable applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="/RESUME_BOSE (1).pdf" target="__blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cloudy className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Cloud</h4>
                                    <p className="text-muted-foreground">
                                        Basic experience with AWS services like EC2, S3, RDS, Lambda, VPC, and Elastic Beanstalk.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section> 
    );
}