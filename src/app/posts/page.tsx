import React from "react";
import { client } from "../../../lib/contentful/client";
import PostCard from "./PostCard";

interface Post {
  fields: {
    slug: string;
    title: string;
    description: string;
    // Adicione outros campos relevantes aqui
  };
}

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <ul>
          {posts.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const getData = async () => {
  const response = await client.getEntries({ content_type: "posts" });

  return {
    props: {
      posts: response.items,
    },
    revalidate: 60, // Revalida a cada 60 segundos
  };
};

export default Posts;