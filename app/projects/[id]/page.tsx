import { supabase } from "@/lib/supabase";
import type { Project } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { SkillTag } from "@/app/_components/molecules/skill-tag";

export const revalidate = 0; // always fetch fresh data

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);

  if (isNaN(projectId)) notFound();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error);
    notFound();
  }

  if (!data) {
    console.warn(`Project with ID ${projectId} not found`);
    notFound();
  }

  const project = data;

  const firstLetter = project.name.charAt(0);
  const restOfName = project.name.slice(1);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bodoni-moda">
          <span className="font-imperial-script font-bold overflow-visible bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {firstLetter}
          </span>
          {restOfName}
        </h2>

        <p className="text-white mb-6 whitespace-pre-line text-base sm:text-lg">
          {project.description}
        </p>

        {project.techstack?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech: string, index: number) => (
                <SkillTag key={index} skill={tech} delay={index * 0.1} />
              ))}
            </div>
          </div>
        )}

        {project.image?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {project.image.map((src: string, index: number) => (
              <img
                key={index}
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                className="rounded-xl shadow-md border border-gray-200"
              />
            ))}
          </div>
        )}

        <div className="mt-10 text-sm sm:text-base text-gray-500">
          Created on:{" "}
          {new Date(project.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </section>
  );
}
