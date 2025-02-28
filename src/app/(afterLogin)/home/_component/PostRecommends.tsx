"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale time, 5분이라는 기준, 항상 gcTime보다 짧아야한다
    gcTime: 300 * 1000, // 가비지 콜렉터 타임(사용하지 않는 데이터 inactive 정리 주기), 기본 5분
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
