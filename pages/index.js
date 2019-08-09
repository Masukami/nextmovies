import Head from "next/head";
import ErrorPage from "../components/error";
import Movie from "../components/movie";
import { getMovies } from "../services/apihandler";

const Index = ({ moviesData, error }) => (
  <div className="home">
    <Head>
      <title>Bjak NextJS</title>
    </Head>
    {error ? (
      <ErrorPage />
    ) : (
      moviesData.map(movie => {
        return <Movie {...movie.data} key={movie.row_id} />;
      })

      // moviesData.map(movie => {
      //   console.log(movie.data);
      //   const movieDataArray = Array.from(movie.data);
      //   return <Movie {...movieDataArray} key={movie.row_id} />;
      // })
    )}
  </div>
);
/* {props.moviesData.map(movie =>
      movie.title == "Multi-Title-Manual-Curation" ? (
        <div className="movie">
          <div className="card">
            <div className="card-header">
              <div className="card-title h3 text-primary">{movie.row_name}</div>
            </div>
          </div>
        </div>
      ) : null
    )} */
//   }
//   </div>
//     <div>
//       <h1>Bjak Movies</h1>
//       <ul>
//         {props.moviesData.map(movie =>
//           movie.type == "Multi-Title-Manual-Curation" ? (
//               <li>
//                 <h2>{movie.row_name}</h2>
//                 {movie.data.map(movieData => (
//                   <div className={"item"} key={movieData.id}>
//                     <Link href="/[id]" as={`/${movieData.id}`}>
//                       <img src={movieData.images[0].url} />
//                     </Link>
//                     <span className={"caption"}>{movieData.title}</span>
//                     <span className={"caption"}>{movieData.short_description}</span>
//                   </div>
//                 ))}
//               </li>
//           ) : null
//         )}
//       </ul>
//       <style jsx>{`
//         .item {
//           vertical-align: top;
//           display: inline-block;
//           text-align: center;
//           padding: 2em;
//         }
//         .caption {
//           display: block;
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
// );

Index.getInitialProps = async () => {
  const res = await getMovies();
  if (res.error) return res;

  const moviesArray = Array.from(res.data);

  return {
    moviesData: moviesArray.map(entry => entry)
  };
};

export default Index;
