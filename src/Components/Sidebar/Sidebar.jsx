import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

//icon imports
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';


const Sidebar = () => {
const menuState = useSelector((state) => state.sidebar.isMenuOpen);

if (menuState){
  return (
    <div className="sidebar">
      <div className="sidebar_section">
        <div className="sidebar_items">
          <div className="sidebar_item" id="feed">
            <div className="sidebar_icon">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <MusicNoteIcon />
            </div>
            <p>Music</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <SubscriptionsIcon />
            </div>
            <p>Subscriptions</p>
          </div>
        </div>
      </div>
      <div className="sidebar_section">
        <div className="sidebar_items">
        <div className="sidebar_header">
        <h3>Explore</h3>
        </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <WhatshotOutlinedIcon />
            </div>
            <p>Trending</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <MovieCreationOutlinedIcon />
            </div>
            <p>Movies & TV</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <RadioButtonCheckedOutlinedIcon />
            </div>
            <p>Live</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <SportsEsportsOutlinedIcon />
            </div>
            <p>Gaming</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <NewspaperOutlinedIcon />
            </div>
            <p>News</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <EmojiEventsOutlinedIcon />
            </div>
            <p>Sports</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <LightbulbOutlinedIcon />
            </div>
            <p>Learning</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <CheckroomOutlinedIcon />
            </div>
            <p>Fashion & Beauty</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <PodcastsOutlinedIcon />
            </div>
            <p>Podcasts</p>
          </div>
        </div>
      </div>
    </div>
  )} else return (
    <div className="small_sidebar">
    <div className="sidebar_section">
      <div className="sidebar_items">
        <div className="small_sidebar_item" id="feed">
          <div className="small_sidebar_icon">
            <HomeIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <MusicNoteIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <SubscriptionsIcon />
          </div>
        </div>
      </div>
    </div>
    <div className="sidebar_section">
      <div className="sidebar_items">
      <div className="sidebar_header">
      <h3>Explore</h3>
      </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <WhatshotOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <MovieCreationOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <RadioButtonCheckedOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <SportsEsportsOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <NewspaperOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <EmojiEventsOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <LightbulbOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <CheckroomOutlinedIcon />
          </div>
        </div>
        <div className="small_sidebar_item">
          <div className="small_sidebar_icon">
            <PodcastsOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
