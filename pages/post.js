import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

// const Content = withRouter((props) => (
//   <div>
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </div>
// ))

// const Page = (props) => (
//     <Layout>
//        <Content />
//     </Layout>
// )

// export default Page

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       {/* <img src={props.show.image.medium}/> */}
       <Markdown source={`
        This is our blog post.
        Yes. We can have a [link](/link).
        And we can have a title as well.

        ### This is a title

        And here's the content.
        `}/>
       <style jsx global>{`
        .markdown {
            font-family: 'Arial';
            }

            .markdown a {
            text-decoration: none;
            color: blue;
            }

            .markdown a:hover {
            opacity: 0.6;
            }

            .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            }
        `}</style>
    </Layout>
)

// 第一引数のcontextオブジェクトはfetchに使えるクエリ情報を持っている
Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)// aタグで遷移してくると、ブラウザのコンソールで表示。なぜなら、ページ遷移はクライアントサイドでのみ起きていることだから。URLで直接入った場合、サーバー側に出力される。

  return { show }
}

export default Post