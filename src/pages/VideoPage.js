import React from "react";
import "./VideoPage.css";
import VideoBlock from "../components/VideoBlock.js";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import feedbackState from "../atoms/feedbackState.js";
import Converter from "../components/Converter.js";

function VideoPage() {
  const { id, type } = useParams();
  const setFeedback = useSetRecoilState(feedbackState);

  const { data, isLoading, error } = useQuery("video", async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=bd7686376aa170d6af7fce5aee732f55`
    );
    const data = await res.json();
    return Converter.convertToTile(type, data);
  });

  if (error) {
    setFeedback({ isVisible: true, message: "Oops, something went wrong" });
  }

  return (
    <div className="videop">
      <VideoBlock data={data} isLoading={isLoading} />
    </div>
  );
}

export default VideoPage;
