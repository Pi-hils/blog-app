import { Post } from './post.model';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post(1,"hi","there")).toBeTruthy()
  });
});
