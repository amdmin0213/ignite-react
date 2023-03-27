import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="Diego Ferreira"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae placeat sed ab sunt voluptatem, natus commodi ex at eos sint dolorum! Non, qui recusandae. Aut molestiae error ipsa quae debitis."
      />
      <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
    </div>
  );
}
