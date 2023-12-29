import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css"

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="rafael"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae deleniti aliquam neque! Voluptatem laborum amet quasi, aut error neque saepe eaque nobis dolorum odit delectus ipsam incidunt deleniti? Ut?"
      />
    </div>
  );
}
