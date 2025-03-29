package org.rookedsysc.cqrsreplicarag.post;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
@Tag(name = "게시글", description = "게시글 관련 API")
public class PostController {

    private final PostService postService;

    @PostMapping
    @Operation(summary = "게시글 생성", description = "제목과 내용을 입력하여 새로운 게시글을 생성합니다.")
    public PostWriteResponse createPost(String title, String content) {
        return postService.createPost(title, content);
    }

    @GetMapping("/count")
    @Operation(summary = "게시글 개수 조회", description = "전체 게시글 개수를 반환합니다.")
    public int countAllPosts() {
        return postService.countAllPosts();
    }

    @GetMapping
    @Operation(summary = "게시글 목록 조회", description = "전체 게시글 목록을 조회합니다.")
    public List<PostReadResponse> findAll() {
        return postService.findAll();
    }
}
