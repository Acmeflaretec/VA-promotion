import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/7txyJiOE86g",
    title: "Ee Elavathoor Kayalinte",
    channel: "Meesamadhavan",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Despacito",
    channel: "Luis Fonsi",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="float-end p-5">
              <Link to={"/menu"}>
                {" "}
                <button className="btn btn-danger">Login with yt</button>
              </Link>
            </div>
          </Col>
          {videos.map((video) => (
            <Col md={4}>
              <div key={video.id}>
                <div>
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: "100%", height: "300px" }}
                  ></iframe>
                </div>
                <h3 className="mt-4 text-center fw-bold">{video.channel}</h3>
              </div>
            </Col>
          ))}
        </Row>

        <div>
          <Personaladd />
        </div>
      </div>
    </div>
  );
}

export default Home;
