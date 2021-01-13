import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import { IProject } from "../shared/types";

const projectsDir = join(process.cwd(), "src", "projects");

export function getSingleProject() {
  const projects = getSortedProjects();
  return projects;
}

export function getSlugs() {
  const projects = getSortedProjects();
  return projects.map((e) => ({ params: { project: e.slug } }));
}

export function getSortedProjects(howMany?: number) {
  const fileNames = fs.readdirSync(projectsDir);

  const allProjectsData = fileNames.map((el) => {
    const withVersion = el.match(/v\d-/);
    let slug;

    if (withVersion) {
      const removingVersion = el.replace(/[\d_]+|v\d-|.mdx/g, "");
      slug = `${withVersion[0]}${removingVersion}`;
      // slug = el.replace(/[\d_]+|.mdx/g, "");
    }
    if (!withVersion) {
      slug = el.replace(/[\d_]+|.mdx/g, "");
    }
    // const slug = el.replace(/[\d_]+|.mdx/g, "");

    const fullPath = join(projectsDir, el);

    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(fileContents);
    const { text } = readingTime(content);

    const options: Intl.DateTimeFormatOptions = {
      // weekday: "long",
      year: "numeric",
      month: "long",
      // day: "numeric",
    };

    const formattedDate = new Date(data.date).toLocaleDateString(
      "UTC",
      options
    );
    const frontmatter = {
      ...(data as IProject),
      date: formattedDate,
      time: text,
    };

    return {
      slug,
      ...frontmatter,
    };
  });

  const sorted = allProjectsData.sort((a, b) => {
    return (b as any).order - (a as any).order;
  }) as IProject[];
  return sorted.slice(0, howMany);
}

function retrieveSlug(el: string) {
  const withVersion = el.match(/v\d-/gi);
  if (withVersion) {
    const slug = el.replace(/[\d_]+|v\d-|.mdx/g, "");

    return `${withVersion[0]}${slug}`;
  }
  return el.replace(/[\d_]+|.mdx/g, "");
}

export const getAllProjectSlugs = () => {
  const fileNames = fs.readdirSync(projectsDir);
  return fileNames.map((el) => {
    const project = retrieveSlug(el);
    return {
      params: {
        project,
      },
    };
  });
  // const slug = el.replace(/[\d_]+|.mdx/g, "");
  // const withVersion = el.match(/v\d-/);
  // let slug;

  // if (withVersion) {
  //   const removingVersion = el.replace(/[\d_]+|v\d-|.mdx/g, "");
  //   slug = `${withVersion[0]}${removingVersion}`;
  //   // slug = el.replace(/[\d_]+|.mdx/g, "");
  // }
  // if (!withVersion) {
  //   slug = el.replace(/[\d_]+|.mdx/g, "");
  // }
  // return fileNames.map((el) => ({
  //   params: {
  //     project: el.replace(/[\d_]+|.mdx/g, ""),
  //   },
  // }));
};

export const getProjectData = (project: string) => {
  const pathOfProjects = fs.readdirSync(projectsDir);
  const singleProject = pathOfProjects.find((e) =>
    e.toLowerCase().includes(project.toLowerCase())
  );
  const fullPath = join(projectsDir, singleProject);
  const projectContent = fs.readFileSync(fullPath, "utf-8");

  return projectContent;
};
