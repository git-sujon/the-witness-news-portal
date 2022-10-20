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
            {" "}
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

let x = {
  _id: "17d266b79d2fcd850cd4d983c3aeb95f",
  others_info: {
    is_todays_pick: false,
    is_trending: true,
  },
  category_id: "07",
  rating: {
    number: 4.2,
    badge: "Excellent",
  },
  total_view: 354,
  title: "‘Self-obsessed liar’: Meghan mocked for Mandela story",
  author: {
    name: "Presstv",
    published_date: "2022-08-30 17:44:16",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  thumbnail_url: "https://i.ibb.co/j86wjDW/unsplash-Eh-Tc-C9s-YXsw-20.png",
  image_url: "https://i.ibb.co/hxG29nr/unsplash-Eh-Tc-C9s-YXsw-9.png",
  details:
    'Meghan Markle\'s Nelson Mandela story continues to unravel after the only South African cast member of \'The Lion King\' said he was "baffled" by her suggestion that he told her his country had "rejoiced" when she married Prince Harry. The former Suits actress recalled an encounter she had at the 2019 London premiere of \'The Lion King\' with an actor from South Africa who made a comparison to her wedding with Prince Harry and Nelson Mandela. “He looked at me, and he’s just like light. He said, ‘I just need you to know: When you married into this family, we rejoiced in the streets the same we did when Mandela was freed from prison,’” she said during an interview with The Cut. The Daily Mail revealed Dr John Kani, who claims he was the only South African actor in the film, said he did not attend the premiere and had never met the Duchess of Sussex. "I have never met Meghan Markle," he told the MailOnline. "This seems like something of a faux pas by her. I have I have never met the duchess at all. I am the only South African member of the cast and I did not attend the premiere in London. "The only South African was me playing Rafiki. But I did not go to the opening in Leicester Square as I didn\'t have the time to do that. It just may be a mis-remembering on her side. "It is baffling me." Nelson Mandela’s grandson said he was “surprised” when he heard Ms Markle compare her wedding with Prince Harry to his grandfather being freed from prison. He said it “cannot be equated to as the same". The Duchess of Sussex was met with heavy criticism online after she told the story to The Cut. "The damage her and her husband are doing to the Queen and the Royal Family is incalculable... these two hypocritical, self-obsessed liars are in the end going to be ignored," said Nigel Farage',
};
