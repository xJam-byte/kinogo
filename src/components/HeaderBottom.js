import React from "react";

function HeaderBottom() {
  return (
    <div className="headerBottom">
      <div className="headerBottom-leftblock">
        <div className="headerBottom-title">Zack Snyder's Justice League</div>
        <ul className="headerBottom-info">
          <li>2021</li>
          <li className="ageBlock">18+</li>
          <li>4h 2min</li>
          <li>
            8.8
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_1_39)">
                <path
                  d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.83 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                  fill="#FFB800"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_39">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
        <div className="headerBottom-description">
          Determined to ensure Superman's ultimate sacrifice was not in vain,
          Bruce Wayne aligns forces with Diana Prince with plans to recruit a
          team of metahumans to protect the world from an approaching threat of
          catastrophic proportions.
        </div>
        <div className="headerBottom-buttons">
          <button className="watchButton">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2923 10.3932L2.15764 17.7762C1.21269 18.4021 0 17.6442 0 16.3824V1.61647C0 0.356646 1.21094 -0.403248 2.15764 0.224664L13.2923 7.60763C13.5073 7.74786 13.686 7.95055 13.8103 8.19516C13.9345 8.43977 14 8.71759 14 9.00043C14 9.28328 13.9345 9.5611 13.8103 9.80571C13.686 10.0503 13.5073 10.253 13.2923 10.3932Z"
                fill="white"
              />
            </svg>
            <span>Watch</span>
          </button>
          <button className="moreInfoButton">More information</button>
        </div>
      </div>
      <div className="headerButtom-rightblock">
        <img src="/images/main.png" alt="main image" />
        <div className="blured"></div>
      </div>
      <hr />
    </div>
  );
}

export default HeaderBottom;
