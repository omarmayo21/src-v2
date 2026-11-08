import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageBanner } from "@/components/PageBanner";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildPageMetadata, getDict, isValidLang, localePath, locales } from "@/lib/locale";

export function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of locales) {
    for (const project of projects) {
      params.push({ lang, slug: project.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildPageMetadata({
      lang,
      path: `/projects/${slug}`,
      title: dict.meta.pages.notFound.title,
      description: dict.meta.pages.notFound.description,
    });
  }

  return buildPageMetadata({
    lang,
    path: `/projects/${project.slug}`,
    title: `${project.name[lang]} | ${dict.brand.company}`,
    description: project.description[lang],
    image: project.image,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang = isValidLang(rawLang) ? rawLang : "ar";
  const dict = getDict(lang);

  const index = projects.findIndex((p) => p.slug === slug || p.id === slug);
  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <PageBanner
        title={project.name[lang]}
        breadcrumb={[
          { label: dict.projects.title, href: localePath(lang, "/projects") },
          { label: project.name[lang] },
        ]}
      />
      <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
      <CtaBand />
    </>
  );
}

