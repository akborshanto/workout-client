import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useAxiosPablic from "../Hooks/useAxiosPpablic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// import { tabClasses } from "@mui/material";

export default function BasicPagination() {
  const axiosPublic = useAxiosPablic();
  const [page, setPage] = useState(1);
  const { data: totalclasses = 0 } = useQuery({
    queryKey: ["totalclasses"], // Pass query key as an object
    queryFn: async () => {
      const res = await axiosPublic.get(`classes/count`);
      return res.data;
    },
  });
  const totalPages = Math.ceil(totalclasses.result / 6);

  const handlePageChange = (event, value) => {
    setPage(value);

  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="primary"
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white", // Change the text color to white
          }
        }}
      />
    </Stack>
  );
}
