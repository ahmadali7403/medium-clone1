import { useEffect, useState } from "react";
import axios from "axios";

import UpgradeNow from "../component/UpgradeNow";
import ForyouAndFeature from "../component/ForyouAndFeature";
import BlogCard from "../component/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://dev.to/api/articles?per_page=10");

        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <UpgradeNow />
      <ForyouAndFeature />

      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
