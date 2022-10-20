import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  
//   console.log(news)
  const { title, details, author, image_url, _id , category_id} = news;


  return (
    <div>
      <Card >
        <Card.Img variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           <p>{details}</p>
          </Card.Text>
          <Link to={`/catagories/${category_id}`}>
          <Button variant="primary">Related News</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
