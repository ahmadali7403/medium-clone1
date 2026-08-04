import { FaHandsClapping } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const formatCount = (count) => {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
  if (count >= 1000) return (count / 1000).toFixed(1) + "K";
  return count;
};
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <article
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="w-full border-b border-gray-200 py-7 px-7"
    >
      {/* Author */}
      <div className="flex items-center gap-2 text-[13px] cursor-pointer">
        <img
          src={blog.user.profile_image}
          alt={blog.user.name}
          className="w-5 h-5 rounded-full object-cover"
        />

        <span className="font-semibold text-[#242424]">{blog.user.name}</span>

        <span className="text-[#6B6B6B]">@{blog.user.username}</span>

        <span className="text-[#6B6B6B]">·</span>

        <span className="text-[#6B6B6B]">{blog.readable_publish_date}</span>
      </div>

      {/* Content */}
      <div className="flex justify-between items-start gap-6 mt-3 cursor-pointer">
        <div className="flex-1">
          <h2 className="text-[22px] font-extrabold leading-[31px] text-[#242424]">
            {blog.title}
          </h2>

          <p className="mt-2 text-[16px] leading-normal text-[#6B6B6B] max-w-[95%]">
            {blog.description}
          </p>
        </div>

        <img
          src={blog.cover_image || "https://picsum.photos/300/300"}
          alt={blog.title}
          className="w-[80px] h-[50px] object-cover flex-shrink-0"
        />
      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-5 cursor-pointer">
        <div className="flex items-center gap-6 text-[#6B6B6B] text-[14px]">
          <div className="group relative flex items-center gap-1.5 ">
            <div className="absolute left-1/2 bottom-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {blog.public_reactions_count} claps
            </div>
            <FaHandsClapping className="text-[16px]" />
            <span>{formatCount(blog.public_reactions_count)}</span>
          </div>

          <div className="group relative flex items-center gap-1.5">
            <div className="absolute left-1/2 bottom-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {blog.comments_count} comments
            </div>
            <FaComment className="text-[16px]" />
            <span>{blog.comments_count}</span>
          </div>

          <div className="group relative flex items-center gap-1.5">
            <div className="absolute left-1/2 bottom-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              25 Repost
            </div>
            <BiRepost className="text-[18px]" />
            <span>25</span>
          </div>
        </div>

        <div className="  flex items-center gap-5 text-[#6B6B6B]">
          <div className="group relative">
            <BiDislike className="text-[24px] cursor-pointer hover:text-black transition" />
            <div className="absolute left-1/2 bottom-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              I'm not interested
            </div>
          </div>
          <div className="group relative" ref={menuRef}>
            <HiOutlineDotsHorizontal
              onClick={() => setShowMenu(!showMenu)}
              className="text-[21px] cursor-pointer hover:text-black transition"
            />
            <div className="absolute left-1/2 bottom-7 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white transition-opacity duration-200 opacity-0 group-hover:opacity-100">
              More!
            </div>
            {showMenu && (
              <div className="absolute right-0 bottom-8 w-56 rounded-lg border border-gray-200 bg-white shadow-xl z-50">
                <button className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-300 cursor-pointer">
                  Save
                </button>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-300">
                  Follow Author
                </button>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-300 cursor-pointer">
                  Mute Author
                </button>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-300 cursor-pointer">
                  Mute Topic
                </button>

                <button className="w-full px-4 py-3 text-left text-red-600 hover:bg-gray-100 cursor-pointer">
                  Report Story
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
