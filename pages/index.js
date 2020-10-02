import Link from 'next/link'
import Layout from '../components/MyLayout.js'


// const Index = () => (
//     <Layout>
//         <Link href="/about">
//             <a style={{ fontSize: 20 }}>About Page</a>
//         </Link>
//         <p>Hello Next.js</p>
//     </Layout>
//   )
  
//   export default Index

//   const PostLink = (props) => (
//     <li>
//         {/* asを使うことで、自動生成されたクエリではなく、意図的なURLで遷移させることができる */}
//         {/* ただし、遷移先でリロードすると、そのURLでサーバーにリクエスト行って404エラーが出るのでカスタムサーバーを作って対処する */}
//         <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
//   )
  
//   export default () => (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="1" title="Hello Next.js"/>
//         <PostLink id="2" title="Learn Next.js is awesome"/>
//         <PostLink id="3" title="Deploy apps with Zeit"/>
//       </ul>
//     </Layout>
//   )

const Index = (props) => (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </Layout>
  )
  
  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)//サーバーのコンソールに出力される、なぜならページはサーバーでレンダリングされるから。
  
    return {
      shows: data
    }
  }
  
  export default Index