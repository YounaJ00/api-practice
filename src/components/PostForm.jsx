import axios from "axios";
import { useState } from "react";

const PostForm = ({ onPostSuccess }) => {
  // 폼 제출시 페이지 새로고침 없이 js에서 데이터 처리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/posts",
        // { title: title, content: content } // request body
        {},
        {
          params: { // request param
            title: title,
            content: content,
          }, 
        }
      );
      console.log("서버 응답:", response.data); // 🔍 서버 응답 확인

      // 초기화
      setTitle("");
      setContent("");

      onPostSuccess(); // 게시물 추가 성공 후 home 상태 변경
    } catch (error) {
      console.error("게시물 작성 오류", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-1/3">
      <h2 className="text-lg font-bold mb-4">게시물 작성</h2>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded-md mb-4"
      />
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded-md h-32 mb-4"
      ></textarea>
      <button
        className="bg-black text-white px-4 py-2 rounded-md flex items-center"
        onClick={handleSubmit}
      >
        ✏️ 작성하기
      </button>
    </div>
  );
};

export default PostForm;
