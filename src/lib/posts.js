import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDir = path.join(process.cwd(), "src", "posts");

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postsDir);

  const allPostsData = fileNames.map((el) => {
    const slug = el.replace(".mdx", "");
    const fullPath = path.join(postsDir, el);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDir);
  console.log("fileNames:", fileNames);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getPostData = async (slug) => {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
