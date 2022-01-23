/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";
import CategoryLabel from "../../components/CategoryLabel";
import {marked} from "marked";

export default function Post({
  frontmatter: { title, category, date, cover_image, author, author_image, alias },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between mt-4 items-center">
          <h1 className="text-3xl mb-7 font-bold border-b-2 border-cyan-500 text-center">{title}</h1>
          {/* <CategoryLabel>{category}</CategoryLabel> */}
        </div>
        <img
          src={cover_image}
          alt={title}
          className="w-full rounded-lg shadow-md"
        />
        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              src={author_image}
              alt={author}
              className="mx-4 w-8 h-8 object-cover rounded-full hidden sm:block"
            />
            <Link href={`/about/#${alias}`}><a className="text-bold hover:text-indigo-500 hover:underline">{author}</a></Link>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div className="blog-text mt-2">
            <div dangerouslySetInnerHTML = {{__html: marked(content)}} />
        </div>
      </div>

      <button className="bg-indigo-800 text-indigo-100 font-bold rounded p-4 m-4
      hover:text-indigo-50 hover:bg-indigo-900 flex flex-row">
        <img src="/images/left-arrow.svg" alt="arrow" className="w-6 h-6 mr-2 bg-gray-100 rounded p-1" />

      <Link href="/blog">Ga terug naar de Samenvattingen</Link>
      </button>

    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = slug + ".md";
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", fileName),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
