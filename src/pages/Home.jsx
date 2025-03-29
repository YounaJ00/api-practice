import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="flex w-full max-w-6xl gap-6">
        <PostList />
        <PostForm />
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        © 2024 게시판 시스템. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
