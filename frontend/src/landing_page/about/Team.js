import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3"
        style={{ lineHeight: "1.8", fontFamily: "Inter", color: "#424242" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/himanshu.jpeg" alt="himanshu img"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Himanshu Singh</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3" style={{fontSize: "1em"}}>
          <p>
            Himanshu Singh is a Full Stack Web Developer. HSotx is one of among his project.
            It's trading platforms. You can easily execute all step related to stock market 
            through HSotx.
          </p>
          <p>
            Himanshu Singh is very hardworking person. He does not interfare any outsides activity.
            If you give him a chance, that's mean you are Lucky not him...
          </p>
          <p>Reading ancient Philosophy & Watching movies related to space and science.</p>
          <p>
            Connect on <a href="/">Homepage</a> / <a target="_blank" href="https://www.linkedin.com/in/himanshu-singh-325438291/">TradingQnA</a> /{" "}
            <a target="_blank" href="https://x.com/Himanshusssingh">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;