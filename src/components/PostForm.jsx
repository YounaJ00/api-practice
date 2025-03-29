const PostForm = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md w-1/3">
        <h2 className="text-lg font-bold mb-4">게시물 작성</h2>
        <input 
          type="text" 
          placeholder="제목을 입력하세요" 
          className="w-full border p-2 rounded-md mb-4"
        />
        <textarea 
          placeholder="내용을 입력하세요" 
          className="w-full border p-2 rounded-md h-32 mb-4"
        ></textarea>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          ✏️ 작성하기
        </button>
      </div>
    );
  };
  
  export default PostForm;
  