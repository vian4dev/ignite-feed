import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from "./App.module.css" 

import './global.css'


export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
           content="Gabriel Viana"

           author="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quam eum. Incidunt temporibus distinctio, omnis nemo nulla ea sapiente, quos totam, nostrum repellat ratione voluptatibus. Voluptas rem consequuntur deserunt mollitia."
          />

          <Post 
           content="Gabriel Viana"

           author="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quam eum. Incidunt temporibus distinctio, omnis nemo nulla ea sapiente, quos totam, nostrum repellat ratione voluptatibus. Voluptas rem consequuntur deserunt mollitia."
          />
        </main>
      </div>
    </div>
  )
}




