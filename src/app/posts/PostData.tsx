import { getAllArticles } from "@/../lib/api";
import PostsList from "./PostList";

export default async function PostsData() {
  const articles = await getAllArticles();
  return <PostsList articles={articles || []} />;
}