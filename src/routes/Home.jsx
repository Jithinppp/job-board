import { useGetPostsQuery } from "../features/apiSlice";

function Home() {
  const { isSuccess, data, isLoading, isError } = useGetPostsQuery("/api/jobs");
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;
  if (isSuccess) {
    return (
      <div>
        {data.jobList.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    );
  }
}
export default Home;
