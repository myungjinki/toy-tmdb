import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Detail = styled.div`
  position: absolute;
  top: 10dvh;
  width: 80vw;
  height: 80dvh;
  background-color: grey;
`;

function Modal({
  movieId,
  setMovieId,
}: {
  movieId: number;
  setMovieId: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <AnimatePresence>
      <Overlay onClick={() => setMovieId(0)} />
      <Detail key={movieId}></Detail>
    </AnimatePresence>
  );
}

export default Modal;
