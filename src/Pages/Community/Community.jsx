import { useQuery } from "@tanstack/react-query";
import useAxiosPablic from "../../Hooks/useAxiosPpablic";
import Loading from "../../Components/Loading/Loading";
import ForumPost from "./ForumPost";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const Community = () => {
  window.scrollTo(0, 0);
  const [totalItem, setTotalItem] = useState(0);
  const axiosPublic = useAxiosPablic();
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axiosPublic.get("forumpostCount").then((res) => {
      setTotalItem(res.data.count);
      console.log(res.data);
    });
  }, [axiosPublic]);

  const {
    data: communityPost = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["communityPost", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/forumpost?page=${page}`);
      return res.data;
    },
  });
  //   console.log(communityPostData)
  //   const communityPost = communityPostData.result
  const totalPages = Math.ceil(totalItem / 6);
  console.log(typeof communityPost.length);
  console.log(communityPost);
  return (
    <div className=" pt-10 md:pt-0 bg-[#141414] min-h-screen pb-10 ">
        <Helmet>
        <title>Workout - Community</title>
      </Helmet>
      <div className="relative  pt-16 w-full space-y-4">
        <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white">
          Forum
          <span className="text-[#007BFF]"> posts</span>
        </h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="px-3">
          {communityPost.map((post) => (
            <ForumPost key={post._id} post={post} />
          ))}
          <div className="w-full flex justify-center py-10">
            <Stack spacing={2}>
              <Pagination
                color="primary"
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white", // Change the text color to white
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
