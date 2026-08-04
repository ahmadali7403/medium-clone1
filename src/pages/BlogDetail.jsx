import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://dev.to/api/articles/${id}`);

        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <h1 className="p-10">Loading...</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{blog.title}</h1>

      <p className="mt-4">{blog.description}</p>

      <img
        src={blog.cover_image || "https://picsum.photos/1200/600"}
        alt={blog.title}
        className="mt-5 w-full max-w-3xl rounded-lg"
      />
      <div
        className="prose prose-lg max-w-none mt-10
             prose-headings:text-[#242424]
             prose-p:text-[#242424]
             prose-a:text-green-700
             prose-img:rounded-lg
             prose-pre:bg-[#f6f8fa]
             prose-code:text-red-600"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  );
};

export default BlogDetails;
