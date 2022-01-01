/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div
      className="w-full px-10 py-6 bg-white rounded-lg shadow-md 
        mt-6"
    >
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        width={600}
        height={420}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        {/* <CategoryLabel>{post.frontmatter.category}</CategoryLabel> */}
      </div>
      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-indigo-500 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-500">{post.frontmatter.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-indigo-500 font-bold hover:underline">Read more</a>
        </Link>
        <div className="flex items-center">
          <img
            src={post.frontmatter.author_image}
            alt=""
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />

          <Link href={`/about`}>
            <a className="text-gray-500 font-bold hover:underline hover:text-red-500">
              {post.frontmatter.author}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
