import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { IPost } from "../shared/types";

const postsDir = path.join(process.cwd(), "src", "posts");

export function getSortedPosts(howMany?: number) {
  const fileNames = fs.readdirSync(postsDir);

  const allPostsData = fileNames.map((el) => {
    const slug = el.replace(/[\d_]+|.mdx/g, "");
    const fullPath = join(postsDir, el);

    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    const options = {
      year: "numeric",
      month: "long",
    };

    const formattedDate = new Date(data.date).toLocaleDateString(
      "UTC",
      options
    );
    const frontmatter: IPost = { ...(data as IPost), date: formattedDate };

    return {
      slug,
      ...frontmatter,
    };
  });

  const sorted = allPostsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  ) as IPost[];
  return sorted.slice(0, howMany);
}

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/[\d_]+|.mdx/g, ""),
      },
    };
  });
};

export const getPostData = async (slug: string) => {
  const allPosts = fs.readdirSync(postsDir);
  const currentPost = allPosts.find((e) => e.includes(slug));
  const fullPath = path.join(postsDir, currentPost);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
