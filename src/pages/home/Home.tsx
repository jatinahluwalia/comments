import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import Leftbar from "../../components/shared/Leftbar";
import { JSONComment } from "../../types";
import Rightbar from "../../components/shared/Rightbar";

const fetchComments = () =>
  axios.get("https://jsonplaceholder.typicode.com/comments");

const Home = () => {
  const [activePost, setActivePost] = useState<number | null>(null);

  const { data } = useQuery<AxiosResponse<JSONComment[]>, AxiosError>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const groupedByPost = data?.data.reduce((acc, comment) => {
    if (!acc[comment.postId]) {
      acc[comment.postId] = [];
    }
    acc[comment.postId].push(comment);
    return acc;
  }, {} as Record<number, JSONComment[]>);
  const groupedByPostValues = Object.values(groupedByPost || []);

  return (
    <main className="flex p-5 max-h-full">
      <Leftbar
        Data={groupedByPostValues}
        activePost={activePost}
        setActivePost={setActivePost}
      />
      <Rightbar Data={groupedByPostValues} activePost={activePost} />
    </main>
  );
};

export default Home;
