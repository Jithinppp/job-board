import { useParams } from "react-router-dom";

function Job() {
  const params = useParams();
  console.log(params);
  return <div>Job</div>;
}
export default Job;
