import { FunctionComponent } from "react";

interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <div className="loader__wrapper">
      Loading
      <div className="loader">
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
      </div>
    </div>
  );
};

export default Loader;
