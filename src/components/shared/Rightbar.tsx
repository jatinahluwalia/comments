import { RightProps } from "../../types";

const Rightbar = ({ Data, activePost }: RightProps) => {
  if (!activePost)
    return (
      <h1 className="font-extrabold text-4xl m-5">
        Please select any post to see its comments
      </h1>
    );
  return (
    <section className="flex flex-col flex-1">
      <h1 className="font-extrabold text-4xl m-5">Comments</h1>
      <ul className="card-list max-h-full overflow-auto">
        {Data[activePost]?.map((comment) => (
          <li key={comment.name} className="card">
            <h3 className="card-title">{comment.name}</h3>
            <p className="card-description">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rightbar;
