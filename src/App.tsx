import React, { useState } from "react";
import { navItems, posts } from "./utils/constants";
import {
  PageWrapper,
  FlexBox,
  ProfileSection,
} from "./styles/GlobalStyledComponent";
import {
  Header,
  ActionButton,
  Logo,
  UserProfile,
  Icons,
  IconArrow,
  Nav,
  NavItem,
} from "./styles/Header";
import {
  ProfileInfo,
  UserDetails,
  EditProfileButton,
  FollowersBox,
  Dropdown,
  DotsButton,
  DropdownMenu,
  MenuItem,
  Checkbox,
  Slider,
  SwitcherContainer,
  MobileVersion,
} from "./styles/ProfileInfo";
import { FeedSection, PostCard } from "./styles/FeedSection";
import logo from "./img/logo.svg";
import photoProfile from "./img/photo-s.png";
import arrrow from "./img/icon_arrow.svg";
import notification from "./img/notifications.svg";
import share from "./img/share recap.svg";
import medium from "./img/medium.svg";
import avatar from "./img/avatar.png";
import editIcon from "./img/edit icon.svg";
import play from "./img/play.svg";
import oval from "./img/Oval.svg";
import report from "./img/icon_report.svg";
import iconDelete from "./img/icon_delete.svg";
import "normalize.css";

const App: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState([23, 23, 23, 23]);
  const [plays, setPlays] = useState([88, 88, 88, 88]);

  const handleUpdate = (
    index: number,
    updateFn: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    updateFn((prev) => {
      const newArray = [...prev];
      newArray[index] += 1;
      return newArray;
    });
  };

  const handleLike = (index: number) => {
    handleUpdate(index, setLikes);
  };

  const handlePlay = (index: number) => {
    handleUpdate(index, setPlays);
  };

  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <PageWrapper>
      <Header>
        <FlexBox>
          <Logo src={logo} alt="logo" />
          <UserProfile>
            <span>Arthur Wood</span>
            <img src={photoProfile} alt="User profile" />
            <IconArrow>
              <img src={arrrow} alt="arrow" />
            </IconArrow>
            <Icons>
              <img src={notification} alt="notification" />
              <img src={share} alt="share" />
              <img src={medium} alt="medium" />
            </Icons>
          </UserProfile>
        </FlexBox>
        <Nav>
          <ul>
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                isActive={activeIndex === index}
                onClick={() => handleNavClick(index)}
              >
                {item}
              </NavItem>
            ))}
          </ul>
        </Nav>
        <ActionButton>+</ActionButton>
      </Header>

      <ProfileSection>
        <ProfileInfo>
          <UserDetails>
            <img src={avatar} alt="avatar" />
            <div>
              <h2>Benjamin Clementine</h2>
              <p>@benclementine</p>
              <EditProfileButton>
                <img src={editIcon} alt="editIcon" />
                Edit Profile
              </EditProfileButton>
            </div>
            <Dropdown>
              <DotsButton onClick={toggleDropdown}>...</DotsButton>
              <DropdownMenu isOpen={dropdownOpen}>
                <MenuItem>
                  <img src={report} alt="report" />
                  <button>Report User</button>
                </MenuItem>
                <MenuItem>
                  <img src={iconDelete} alt="delete" />
                  <button>Block User</button>
                </MenuItem>
              </DropdownMenu>
            </Dropdown>
            <MobileVersion>
              <FlexBox>
                <p className="bold-text">Public</p>
                <SwitcherContainer>
                  <Checkbox type="checkbox" />
                  <Slider />
                </SwitcherContainer>
                <p className="bold-text">Private</p>
              </FlexBox>
            </MobileVersion>
          </UserDetails>
          <FollowersBox>
            <div>
              <span>45</span>
              <p>synths</p>
            </div>
            <div>
              <span>110</span>
              <p>followers</p>
            </div>
            <div>
              <span>322</span>
              <p>following</p>
            </div>
          </FollowersBox>
          <p>
            Cryptocurrencies including Ethereum, Ripple, and Litecoin have all
            plunged between 20 to 30 percent each, according to CoinMarketCap.
            Here is the latest Ripple price news and live updates on XRP,
            bitcoin and Ethereum.
          </p>
        </ProfileInfo>

        <FeedSection>
          {posts.map((post, index) => (
            <PostCard key={index}>
              <h3>{post.title}</h3>
              <FlexBox>
                <img src={oval} alt="Oval" />
                <p>{post.author}</p>
                {index < 2 ? (
                  <div className="share">
                    <button>Share</button>
                  </div>
                ) : (
                  <FlexBox>
                    <img
                      className="span"
                      src={play}
                      alt="play"
                      onClick={() => handlePlay(index)}
                    />
                    <span>{plays[index]}</span>
                    <span onClick={() => handleLike(index)}>❤️</span>
                    <span>{likes[index]}</span>
                  </FlexBox>
                )}
              </FlexBox>
            </PostCard>
          ))}
        </FeedSection>
      </ProfileSection>
    </PageWrapper>
  );
};

export default App;
