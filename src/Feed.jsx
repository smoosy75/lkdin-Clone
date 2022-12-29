import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import PhotoIcon from "@mui/icons-material/Photo";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ArticleIcon from "@mui/icons-material/Article";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_imputContainer">
        <div className="feed_input">
          <form>
            <input type="text" placeholder="Commencer un post" />
            <button type="submit"> Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideoLibraryIcon} title="Vidéo" color="#e7a33E" />
          <InputOption
            Icon={InsertInvitationIcon}
            title="Evenement"
            color="#c0cbcd"
          />
          <InputOption
            Icon={ArticleIcon}
            title="Rédiger un Article"
            color="#7fc15e"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
