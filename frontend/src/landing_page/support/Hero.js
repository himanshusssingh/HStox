import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div
        className="row"
        style={{
          backgroundColor: "#387ed1",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="col-2"></div>
        <div className="col-5 pt-5 pb-5 mt-5 mb-5">
          <h4 className="mb-5">Support Portal</h4>
          <h5 className="fs-4 mt-5 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <input
            style={{ width: "90%", height: "50px" }}
            placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
          />
          <br />
          <div className="mt-3 mb-3">
            <a
              className="mt-2 "
              style={{ color: "#fff"}}
              href=""
            >
              Create a ticket
            </a>
            &nbsp; &nbsp;
            <a
              className="mt-2"
              style={{ color: "#fff" }}
              href=""
            >
              View tickets
            </a>
          </div>
          <div>
            <a
              className="mt-2"
              style={{ color: "#fff" }}
              href=""
            >
              Intraday margins
            </a>
            &nbsp; &nbsp;
            <a
              className="mt-2"
              style={{ color: "#fff" }}
              href=""
            >
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-5 pt-5 pb-5 mt-5 mb-5">
          <a
            className="mt-2 mb-5"
            style={{ color: "#fff" }}
            href=""
          >
            Track Tickets
          </a>
          <h5 className="fs-4 mt-5 mb-3">Featured</h5>
          <ol>
            <li>
              <a style={{ color: "#fff" }} href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <br />
            <li>
              <a style={{ color: "#fff" }} href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
