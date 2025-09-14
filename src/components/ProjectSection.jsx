import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Policy Tracker",
        description: "A web application that helps track, manage, and monitor clients' LIC policies, providing updates on premiums, maturity dates, and policy details for better organization and planning.",
        images: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "TypeScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Bosevetrivelram47/premium"
    },
    {
        id: 2,
        title: "Image Compressor",
        description: "Developed a Java-based console application for lossy JPEG image compression, leveraging ImageIO and ImageWriter APIs to reduce file size while maintaining image quality.",
        images: "/projects/project2.png",
        tags: ["Java I/O Streams", "Byte Arrays"],
        demoUrl: "#",
        githubUrl: "https://github.com/Bosevetrivelram47/image-compression"
    },
    // {
    //     id: 3,
    //     title: "E-commerce Platform",
    //     description: "Full featured e-commerce platform with user authentication and image processing.",
    //     images: "/projects/project3.png",
    //     tags: ["React", "Node.js", "Stripe"],
    //     demoUrl: "#",
    //     githubUrl: "#"
    // }
];

export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.images} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/Bosevetrivelram47"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}