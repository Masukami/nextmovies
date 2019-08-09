import Head from "next/head";
import ErrorPage from '../components/error';
import { getMovieDetails } from "../services/apihandler";

const MoviePage = ({ movie, error }) =>
  error ? (
    <div className="movie">
      <ErrorPage />
    </div>
  ) : (
    <div className="movie">
      <Head>
        <title>{movie.title} | Bjak Next</title>
      </Head>
      <div />
    </div>
  );

MoviePage.getInitialProps = async ({ query: { id } }) => {
  const res = await getMovieDetails(id);
  if (res.error) return res;

  return { movie: res.data };
};
