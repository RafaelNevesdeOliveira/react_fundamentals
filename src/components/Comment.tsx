import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

interface CommentProps{
  content: string;
  //tipar funcao que recebe uma variavel do tipo String, mas nao retorna nada
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/53528153?s=96&v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Seu Madruga</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
