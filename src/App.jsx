import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from "./App.module.css" 

import './global.css'

const posts = [
  {
    id: 1,
    author : {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
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
      {type: 'paragraph', content: ' Faaaaala dev,👋',},      
      {type: 'paragraph', content: 'No DevLinks você tem acesso a um aprendizado gratuito e de alta qualidade para conhecer o universo da programação, dominar os fundamentos e decolar nesse universo.'},
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
              key={post.id}
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




