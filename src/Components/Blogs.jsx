import React from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (

      <div className="w-[490px] h-screen  py-8 mt-[580px] mb-[40px] flex  flex-col justify-center items-center">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>
            <p>No Post Found</p>
          </div>
        ) : (
          posts.map((post) => (
            <div>
              <h1 className="font-bold">{post.title}</h1>
              <p className="text-sm">
                By <span className=" italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
              </p>
              <p>Posted on{post.date}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag) => (
                  <p>{`#${tag}`}</p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

  );
};

export default Blogs;
