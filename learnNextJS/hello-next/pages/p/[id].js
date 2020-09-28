import fetch from 'isomorphic-unfetch';
import Layout from '../../components/MyLayout';
import Markdown from 'react-markdown';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <div className="markdown">
    <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.show.image.medium} />
    </div>
    <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown p {
          text-decoration: none;
          color: blue;
        }

        .markdown p:hover {
          opacity: 0.6;
        }

        .markdown p {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return {show};
};

export default Post;