import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";
import Personaladd from "../components/Personaladd";
import { Link } from "react-router-dom";
import { fetchVideos } from "../services/allApi";

function Home() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const videosData = await fetchVideos();
      setVideos(videosData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="float-end p-5">
              <Link to={"/menu"}>
                <button className="btn btn-danger">Dashboard</button>
              </Link>
            </div>
          </Col>
          {videos.map((video) => (
            <Col md={4} key={video._id}>
              <div>
                <div>
                  <iframe
                    src={video.url}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ width: "100%", height: "300px" }}
                  ></iframe>
                </div>
                <h3 className="mt-4 text-center fw-bold">{video.name}</h3>
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
