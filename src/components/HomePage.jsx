import React from "react";
import { Link } from "react-router-dom";
import "../style/homepage.css";

function HomePage() {
  return (
    <div className="mainpage">
      <section className="section-plans" id="section-plans">
        <div className="u-center-text u-margin-bottom-big">
          <h1 className="heading">WELCOME TO CYPHEN</h1>
        </div>

        <div className="row">
          <div className="col-2-of-3">
            <div className="card">
              <div className="card__side card__side--front-1">
                <div className="card__title card__title--1">
                  <h4 className="card__heading">
                    Welcome to the Future Cyphen's ChatBot
                  </h4>
                </div>

                <div className="card__details"></div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__info">
                    <p>
                      <Link to="/chat-bot">
                        <button className="btn">GO TO CHATBOT</button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2-of-3">
            <div className="card">
              <div className="card__side card__side--front-2">
                <div className="card__title card__title--2">
                  <h4 className="card__heading">
                    Get ready to find some awesome courses
                  </h4>
                </div>

                <div className="card__details"></div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__info">
                    <Link to="/course-finder">
                      <button className="btn">GO TO COURSE FINDER</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
