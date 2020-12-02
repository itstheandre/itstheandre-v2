import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const projectsDir = join(process.cwd(), "src", "projects");

export function getSingleProject(name: string = "") {
  const projects = getSortedProjects();
  return projects;
}

export function getSlugs() {
  const projects = getSortedProjects();
  return projects.map((e) => ({ params: { project: e.slug } }));
}

export function getSortedProjects() {
  const fileNames = fs.readdirSync(projectsDir);

  const allProjectsData = fileNames.map((el) => {
    const slug = el.replace(/[\d_]+|.mdx/g, "");

    const fullPath = join(projectsDir, el);

    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContents);

    const options = {
      // weekday: "long",
      year: "numeric",
      month: "long",
      // day: "numeric",
    };

    const formattedDate = new Date(data.date).toLocaleDateString(
      "UTC",
      options
    );
    const frontmatter = { ...data, date: formattedDate };

    return {
      slug,
      ...frontmatter,
    };
  });

  return allProjectsData.sort((a, b) => {
    return (b as any).order - (a as any).order;
  });
}
