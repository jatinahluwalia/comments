import { useState } from "react";
import { JSONComment, LeftProps } from "../../types";

const Leftbar = ({ Data, activePost, setActivePost }: LeftProps) => {
  const [filteredData, setFilteredData] = useState<JSONComment[][]>([]);
  console.log(filteredData);
  return (
    <section className="flex flex-col max-h-full flex-1 min-w-[50%]">
      <h1 className="font-extrabold text-4xl m-5">Posts</h1>
      <label htmlFor="postId" className="px-5 font-bold text-xl">
        Select post by ID:
      </label>
      <select
        name="postId"
        id="postId"
        className="p-5 mb-5 mx-5 border-[1px] border-gray-400 rounded-md"
        onChange={(e) => {
          setFilteredData(JSON.parse(e.target.value));
        }}
      >
        {Data.map((post) => (
          <option key={post[0].postId} value={JSON.stringify([post])}>
            {post[0].postId}
          </option>
        ))}
      </select>

      <ul className="card-list max-h-full overflow-auto cursor-pointer">
        {!filteredData.length
          ? Data.map((post) => (
              <li
                key={post[0].postId}
                className={`card ${
                  activePost === post[0].postId ? "active-card" : ""
                }`}
                onClick={() => {
                  setActivePost(post[0].postId);
                }}
              >
                <h3 className="card-title">{post[0].name}</h3>
                <p className="card-description">{post[0].body}</p>
              </li>
            ))
          : filteredData.map((post) => (
              <li
                key={post[0].postId}
                className={`card ${
                  activePost === post[0].postId ? "active-card" : ""
                }`}
                onClick={() => {
                  setActivePost(post[0].postId);
                }}
              >
                <h3 className="card-title">{post[0].name}</h3>
                <p className="card-description">{post[0].body}</p>
              </li>
            ))}
      </ul>
    </section>
  );
};

export default Leftbar;
