import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { title, details, author, image_url, _id } = news;
  return (
    <div className="mb-5">
      <Card className="">
        <Card.Header>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <img
                  style={{ width: "40px", borderRadius: " 50%" }}
                  src={author.img}
                  alt=""
                />
              </div>
              <div>
                <p className="m-0">{news?.author?.name}</p>
                <p className="m-0">{news?.author?.published_date}</p>
              </div>
            </div>

            <div className="d-flex ms-auto align-items-center">
              <FaBookmark className=""></FaBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="mx-auto">
       
            <Card.Img variant="top" src={image_url} />
          </div>
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FaStar className="text-warning me-1"></FaStar>
              {news?.rating?.number}
            </div>
            <div>
              <div className="d-flex align-items-center">
                <FaEye></FaEye>
                <p className="m-0 ms-2">{news?.total_view}</p>
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;

