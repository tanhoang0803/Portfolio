import { getProjects } from "@/lib/contentful";
import ProjectCard from "@/components/ui/ProjectCard";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            03. projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl">
            A selection of projects I&apos;ve built — from SaaS platforms to
            AI-powered tools and IoT systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
