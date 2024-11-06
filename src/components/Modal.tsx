import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { getMovie, makeImagePath } from "../api";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Detail = styled.div`
  position: fixed;
  top: 10dvh;
  width: 80vw;
  max-width: 640px;
  height: 80dvh;
  background-color: grey;
`;

const Poster = styled.div<{ $poster_path: string }>`
  background-image: url(${(props) => props.$poster_path});
  background-size: cover;
  width: 100%;
  height: 60%;
`;
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 12px 0px;
`;
const Overview = styled.div`
  font-size: 16px;
  padding: 12px;
  line-height: 1.3rem;
`;

function Modal({
  movieId,
  setMovieId,
}: {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { data } = useQuery(["Detail"], () => getMovie(movieId));
  return (
    <AnimatePresence>
      <Overlay onClick={() => setMovieId(0)} />
      <Detail key={movieId}>
        <Poster $poster_path={makeImagePath(data.poster_path)} />
        <Title>{data.title}</Title>
        <Overview>{data.overview}</Overview>
      </Detail>
    </AnimatePresence>
  );
}

export default Modal;
