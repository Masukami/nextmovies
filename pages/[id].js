import fetch from "isomorphic-unfetch";

const Detail = props => (
  <div>
    <img src={props.images[2].url} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
);

Detail.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://cdn-discover.hooq.tv/v1.2/discover/titles/${id}`
  );
  const movie = await res.json();
  var moviesData = movie.data;

  console.log(`Fetched movie : ${moviesData.title}`);
  console.log(`Fetched movie : ${moviesData.description}`);

  return moviesData;
};

export default Detail;
