import Layout from "../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Post from "../components/Post";
import { sortByDate } from "../utils";
import BackgroundVideo from "../components/BackgroundVideo";

export default function Home({ posts }) {
  return (
    <Layout>
      <BackgroundVideo />
      <h1 className="text-5xl boder-b-4 p-5  font-bold text-center">Laatste Boeken</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href="/blog">
        <a
          className="w-1/5 m-auto mt-5 block text-center border border-gray-500 text-gray-800 
              rounded-md py-4 my-5 transition duration-500 ease select-none font-bold hover:text-white 
              hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
        >
          Less meer
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  // const files = fs.readdirSync(path.join(process.cwd(), "pages"));
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6),
    },
  };
}
