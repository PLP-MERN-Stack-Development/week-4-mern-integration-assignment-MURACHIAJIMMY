import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CategorySelect from "@/components/CategorySelect";

const PostForm = ({ edit = false }) => {
  useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    content: "",
    categoryName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Update category from CategorySelect
  const handleCategoryChange = (val) =>
    setForm({ ...form, categoryName: val });

  useEffect(() => {
    if (edit && id) {
      (async () => {
        try {
          const res = await axios.get(`/posts/${id}`);
          const { title, content, category } = res.data;
          setForm({ title, content, categoryName: category?.name || "" });
        } catch {
          toast.error("Failed to load post");
        }
      })();
    }
  }, [edit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (edit) {
        await axios.put(`/posts/${id}`, form);
        toast.success("Post updated ✏️");
      } else {
        await axios.post("/posts", form);
        toast.success("Post created 📝");
      }
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold">
        {edit ? "Edit Post" : "Create New Post"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="Post title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Textarea
          name="content"
          placeholder="Write your content..."
          value={form.content}
          onChange={handleChange}
          rows={8}
          required
        />
        <CategorySelect
          value={form.categoryName}
          onChange={handleCategoryChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (edit ? "Updating..." : "Posting...") : edit ? "Update" : "Post"}
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
