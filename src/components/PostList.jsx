import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]); // posts를 상태로 관리

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
        setPosts(response.data); // API에서 받은 데이터를 상태에 저장
      } catch (error) {
        console.error("게시물 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchPosts(); // useEffect 실행 시 데이터 가져오기
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-2/3">
      <h2 className="text-lg font-bold mb-4">게시물 목록</h2>
      <p className="text-sm text-gray-500 mb-4">총 게시물: {posts.length}개</p>
      {posts.map((post) => (
        <div key={post.id} className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
