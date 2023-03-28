import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Ferreira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae placeat sed ab sunt voluptatem, natus commodi ex at eos sint dolorum! Non, qui recusandae. Aut molestiae error ipsa quae debitis."
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
