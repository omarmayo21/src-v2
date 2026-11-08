/**
 * Project gallery & detail data (placeholders).
 * All values in [brackets] are placeholders to be replaced with real project data.
 * To use a real photo: drop the file into /public/images/projects/ with the
 * file name used in `image` / `gallery`, and replace the bracketed text below.
 */
export type Bilingual = { ar: string; en: string };

export type ProjectGalleryItem = {
  src: string;
  alt: Bilingual;
  tone: "light" | "warm" | "navy";
  aspect: "portrait" | "landscape" | "square";
};

export type Project = {
  id: string;
  slug: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
  tone: "light" | "warm" | "navy";
  name: Bilingual;
  /** Category / project type (used for filter chips on /projects and info sidebar on /projects/[slug]) */
  type: Bilingual;
  location: Bilingual;
  year: Bilingual;
  stoneType: Bilingual;
  description: Bilingual;
  alt: Bilingual;
  gallery: ProjectGalleryItem[];
  isPlaceholder?: boolean;
};

const categories: Bilingual[] = [
  { ar: "[واجهات معمارية]", en: "[Architectural Facades]" },
  { ar: "[مباني تجارية وإدارية]", en: "[Commercial & Administrative]" },
  { ar: "[مشاريع سكنية وقصور]", en: "[Residential & Palaces]" },
];

const tones: Array<Project["tone"]> = ["light", "warm", "navy"];
const aspects: Array<Project["aspect"]> = ["portrait", "landscape", "square"];

function makeProject(n: string, index: number): Project {
  const category = categories[index % categories.length];
  const tone = tones[index % tones.length];
  const aspect = aspects[index % aspects.length];

  return {
    id: `p${n}`,
    slug: `project-${n}`,
    image: `/images/projects/placeholder-project-${n}.webp`,
    aspect,
    tone,
    isPlaceholder: true,
    name: {
      ar: `[اسم المشروع ${n}]`,
      en: `[Project name ${n}]`,
    },
    type: category,
    location: {
      ar: "[المدينة - المملكة العربية السعودية]",
      en: "[City - Saudi Arabia]",
    },
    year: {
      ar: "[سنة التنفيذ]",
      en: "[Year]",
    },
    stoneType: {
      ar: "[نوع الحجر / الجرانيت المستخدم]",
      en: "[Stone / Granite type]",
    },
    description: {
      ar: `[وصف المشروع ${n} - بيانات تجريبية تُستبدل لاحقاً: يتضمن هذا المشروع أعمال التوريد والقص والتجهيز لمنتجات الحجر الطبيعي والجرانيت في مصنع سيرفك، وفق المقاسات والمواصفات الفنية المعتمدة للمشروع.]`,
      en: `[Project ${n} description - placeholder to be replaced: scope covers stone selection, precision cutting, processing, and supply from SRFEC Stone Factory in accordance with the approved architectural specifications.]`,
    },
    alt: {
      ar: `[صورة تمثيلية للمشروع ${n} - حجر طبيعي وجرانيت]`,
      en: `[Representative project ${n} photograph - architectural natural stone and granite]`,
    },
    gallery: [
      {
        src: `/images/projects/placeholder-project-${n}.webp`,
        alt: {
          ar: `[صورة المشروع ${n} - اللقطة الرئيسية]`,
          en: `[Project ${n} - main view]`,
        },
        tone,
        aspect: "landscape",
      },
      {
        src: `/images/projects/placeholder-project-${String(((index + 1) % 9) + 1).padStart(2, "0")}.webp`,
        alt: {
          ar: `[صورة المشروع ${n} - تفاصيل الواجهة والحجر]`,
          en: `[Project ${n} - stone facade detail]`,
        },
        tone: tones[(index + 1) % tones.length],
        aspect: "portrait",
      },
      {
        src: `/images/projects/placeholder-project-${String(((index + 2) % 9) + 1).padStart(2, "0")}.webp`,
        alt: {
          ar: `[صورة المشروع ${n} - تفاصيل التشطيب والتركيب]`,
          en: `[Project ${n} - finishing detail]`,
        },
        tone: tones[(index + 2) % tones.length],
        aspect: "square",
      },
    ],
  };
}

export const projects: Project[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09"].map((n, i) =>
  makeProject(n, i),
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug || p.id === slug);
}
