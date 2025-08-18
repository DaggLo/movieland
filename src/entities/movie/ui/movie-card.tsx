import { type MovieCardProps } from "../lib";
import { cn } from "@shared";

const block = cn("movie-card");

export const MovieCard = ({ movie, ref }: MovieCardProps) => {
  return <div ref={ref}></div>;
};
