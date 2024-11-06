import { ClipLoader } from "react-spinners";

function Loading() {
  return (
    <ClipLoader
      color={"#ffffff"}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loading;
