import React from "react";
import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <div>detail</div>;
};

export default detail;
