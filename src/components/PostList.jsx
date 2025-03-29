// rafce
import axios from 'axios';
import React from 'react'

더미데이터
const posts = [
    { id: 1, title: "2024년 1분기 회사 실적 보고", content: "2024년 1분기의 실적을 분석한 결과..." },
    { id: 2, title: "신규 프로젝트 킥오프 미팅 안내", content: "새로운 클라이언트 업무 솔루션 개발..." },
    { id: 3, title: "직원 복지 제도 개선 안내", content: "임직원들의 일과 삶의 균형을 위해..." },
    { id: 4, title: "연차 휴가 사용 안내", content: "연차 사용의 자유를 보장하고..." },
    { id: 5, title: "사내 동호회 모집 공고", content: "임직원들의 취미 생활과 친목 도모를 위해..." }  
  ];
  
const PostList = () => {
  return (
    <div className='bg-white p-6 rounded-x1 shadow-md w-2/3'>
        <h2 className='text-lg font-bold mb-4'>게시물 목록</h2>
        <p className='text-sm text-gray-500 mb-4'>총 게시물: {posts.length}개</p>
        {posts.map((post) => (
            <div key={post.id} className='border-b pb-4 mb-4'>
            <h3 className='text-lg font-semibold'>{post.title}</h3>
            <p className='text-gray-600 text-sm mt-2'>{post.content}</p>
            </div>
        ))}
    </div>
  )
}

export default PostList