import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { useState } from "react";

const Home = () => {

  const [refreshKey, setRefreshKey] = useState(0); // 게시물 추가 시 변경될 상태
  const handlePostSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="flex w-full max-w-6xl gap-6">
        <PostList refreshKey={refreshKey} />
        <PostForm onPostSuccess={handlePostSuccess} />
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 게시판 시스템. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
