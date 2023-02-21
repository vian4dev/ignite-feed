import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from "./App.module.css" 

import './global.css'

const posts = [
  {
    id: 1,
    author : {
      avatarUrl: 'https://github.com/vian4dev.png',
      name: 'Gabriel Viana',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {link: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-20 18:29:00'),
  },
  {
    id: 2,
    author : {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {link: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-19 15:14:00'),
  },
];


export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}




