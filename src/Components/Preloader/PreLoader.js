import './Preloader.css';
import DotLoader from "react-spinners/DotLoader";
const PreLoader = ({text}) => {
  return (
    <>
      <div className="pre-loader-for-all">
        <DotLoader color="#0d6efd" />
        <p>{text}</p>
      </div>
    </>
  );
}
export default PreLoader