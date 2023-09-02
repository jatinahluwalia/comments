export type JSONComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type LeftProps = {
  Data: JSONComment[][];
  activePost: number | null;
  setActivePost: React.Dispatch<React.SetStateAction<number | null>>;
};
export type RightProps = {
  Data: JSONComment[][];
  activePost: number | null;
};
