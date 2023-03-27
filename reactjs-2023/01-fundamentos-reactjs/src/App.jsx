import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Ferreira"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae placeat sed ab sunt voluptatem, natus commodi ex at eos sint dolorum! Non, qui recusandae. Aut molestiae error ipsa quae debitis."
      />
      <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
    </div>
  );
}
