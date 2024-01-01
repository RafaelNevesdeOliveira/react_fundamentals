import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="rafael"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae deleniti aliquam neque! Voluptatem laborum amet quasi, aut error neque saepe eaque nobis dolorum odit delectus ipsam incidunt deleniti? Ut?"
          />
        </main>
      </div>
    </div>
  );
}
