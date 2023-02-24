import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        console.log('deletar')

        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vian4dev.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Viana</strong>
                            <time title="17 de Fevereiro às 10:01h" dateTime="2023-02-17"></time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}