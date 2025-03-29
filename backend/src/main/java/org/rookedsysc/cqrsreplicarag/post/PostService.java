package org.rookedsysc.cqrsreplicarag.post;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public PostWriteResponse createPost(String title, String content) {
        Post post = Post.builder().title(title).content(content).build();

        PostWriteResponse response = PostWriteResponse.builder()
            .id(postRepository.save(post).getId())
            .title(title)
            .content(content)
            .build();
        return response;
    }

    public int countAllPosts() {
        return postRepository.countAllBy();
    }

    public List<PostReadResponse> findAll() {
        final List<Post> posts = postRepository.findAll();
        final List<PostReadResponse> responses = posts.stream().map(
            (post) -> PostReadResponse.builder()
                .id(post.getId())
                .title(post.getTitle())
                .content(post.getContent())
                .build()
        ).toList();

        return responses;
    }
}
