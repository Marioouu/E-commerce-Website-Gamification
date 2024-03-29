import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const [classn, setclassn] = useState("collapsed");
  const handelsidebar = () => {
    if (classn === "expanded") {
      setclassn("collapsed");
    } else {
      setclassn("expanded");
    }
  };
  const stats = useSelector((state) => state.hint.hint.user);

  return (
    <>
      <div
        onClick={handelsidebar}
        className={` FreeShippingBanner-sidebar FreeShippingBanner-sidebar-${classn}`}
      >
        <div
          className={` FreeShippingBanner-arrow FreeShippingBanner-arrow-${classn}`}
        ></div>
        <p className="FreeShippingBanner-sidebar-content"> Myntra Heist !!!</p>
      </div>
      {localStorage.getItem("token") ? (
        <>
          {classn === "expanded" && (
            <div className={`FreeShippingBanner-banner-${classn}`}>
              <div className="FreeShippingBanner-first-row">
                <div className="FreeShippingBanner-description">
                  <div className="FreeShippingBanner-pre-header">
                    MYNTRA TREASURE HUNT
                  </div>
                  <div className=" FreeShippingBanner-header FreeShippingBanner-header-primary">
                    Welcome {stats ? (stats.name.charAt(0).toUpperCase() + stats.name.slice(1)).split(' ')[0] : "Professor"},
                  </div> 
                  <div className=" FreeShippingBanner-header FreeShippingBanner-header-secondary">
                    Guess the hint and win amazing rewards
                  </div>
                </div>
                <div className="FreeShippingBanner-stats">
                  <div>Your Score: {Math.round(stats.score)}</div>
                  <div> Total Puzzles Solved: {stats.totalPuzzlesSolved}</div>
                </div>
              </div>
              <div className="FreeShippingBanner-second-row">
                <div className="FreeShippingBanner-coupon">
                  <div>
                    <span className="FreeShippingBanner-text">Reward Coupon:</span>
                    <span className="FreeShippingBanner-code">HEIST_NF37D</span>
                  </div>
                </div>
                <div className="FreeShippingBanner-getHint">
                  <div className="rowTwo_popUps">
                    <div
                      className="FreeShippingBanner-text"
                      onClick={() => {
                        props.setIsHintOpen((prev) => {
                          return !prev;
                        });
                        props.setisLeaderboardOpen(false);
                      }}
                    >
                      Current Hint
                    </div>

                    <div
                      className="FreeShippingBanner-text"
                      onClick={() => {
                        props.setisLeaderboardOpen((prev) => {
                          return !prev;
                        });
                        props.setIsHintOpen(false);
                      }}
                    >
                      LeaderBoard
                    </div>

                  </div>
                </div>
              </div>
              <div className="FreeShippingBanner-trust-builders">
                <div className="FreeShippingBanner-item">
                  <span className="FreeShippingBanner-text">
                    Earn Myntra coins • Compete among our users • Strengthen thinking
                    skills
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {classn === "expanded" && (
            <div className={`FreeShippingBanner-banner-${classn}`}>
              <div className="FreeShippingBanner-first-row">
                <div className="FreeShippingBanner-description">
                  <div className="FreeShippingBanner-pre-header">
                    MYNTRA TREASURE HUNT
                  </div>
                  <div className=" FreeShippingBanner-header FreeShippingBanner-header-primary">
                    Welcome Professor,
                  </div>
                  <div className=" FreeShippingBanner-header FreeShippingBanner-header-secondary">
                    Guess the hint and win amazing rewards
                  </div>
                </div>
                <div className="FreeShippingBanner-image">
                  <img
                    className="FreeShippingBanner-imageContent"
                    src="/images/tt.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="FreeShippingBanner-second-row">
                <div className="FreeShippingBanner-coupon">
                  <div>
                    <span className="FreeShippingBanner-text">Win Exciting Rewards</span>
                    {/* <span className="FreeShippingBanner-code"></span> */}
                  </div>
                  <div className="FreeShippingBanner-footer">
                    {" "}
                    To Play please Login first !!
                  </div>
                </div>
                <div className="FreeShippingBanner-signup">
                  <Link className="FreeShippingBanner-button" to="/login">
                    <div className="FreeShippingBanner-text">
                      {localStorage.getItem("token") ? "START HEIST" : "SIGN UP TO HEIST"}{" "}
                      &gt;
                    </div>
                  </Link>
                </div>
              </div>
              <div className="FreeShippingBanner-trust-builders">
                <div className="FreeShippingBanner-item">
                  <span className="FreeShippingBanner-text">
                    Earn Myntra coins • Compete among our users • Strengthen thinking
                    skills
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
