import { QueryCache, useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, Variants } from "framer-motion";
import styled from "styled-components";
import { getMovie, makeImagePath } from "../api";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Detail = styled(motion.div)`
  position: fixed;
  top: 10dvh;
  width: 80vw;
  max-width: 640px;
  height: 80dvh;
  background-color: black;
  overflow: scroll;
`;

const Poster = styled.div<{ $poster_path: string }>`
  background-image: url(${(props) => props.$poster_path});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60%;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding-top: 2rem;
`;

const Overview = styled.div`
  font-size: 1rem;
  padding: 2rem;
  line-height: 1.4rem;
`;

const Exit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  color: black;
  font-size: 32px;
`;

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const detailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Modal({
  movieId,
  setMovieId,
}: {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { isLoading, data } = useQuery(["Detail"], () => getMovie(movieId), {
    cacheTime: 0,
  });
  const queryCache = new QueryCache();

  function closeModal() {
    setMovieId(0);
    queryCache.clear();
  }
  return (
    <>
      {!isLoading && (
        <>
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => closeModal()}
          />
          <Detail
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={movieId}
          >
            <Exit onClick={() => closeModal()}>X</Exit>
            <Poster $poster_path={makeImagePath(data.poster_path)} />
            <Title>{data.title}</Title>
            <Overview>{data.overview}</Overview>
          </Detail>
        </>
      )}
    </>
  );
}

export default Modal;
