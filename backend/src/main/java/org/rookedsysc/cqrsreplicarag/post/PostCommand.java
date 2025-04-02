package org.rookedsysc.cqrsreplicarag.post;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PostCommand {
    private final String title;
    private final String content;
}
