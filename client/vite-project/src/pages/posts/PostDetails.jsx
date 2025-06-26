import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "@/lib/axios";
import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton"; // Optional: add this if installed
import CommentSection from "@/components/CommentSection";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto mt-4 space-y-4">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (!post) return <p className="text-center mt-10">Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="p-6 space-y-2">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">
          Category: {post.category?.name || "Uncategorized"}
        </p>
        <div className="pt-4">{post.content}</div>
      </Card>

      <CommentSection postId={post._id} />
    </div>
  );
};

export default PostDetails;
