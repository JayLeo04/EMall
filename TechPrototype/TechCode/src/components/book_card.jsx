import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={book.title}
            src={`http://localhost:8081${book.cover}`}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />
        }
      >
        <Meta title={book.title} description={`￥${book.price / 100}`} />
      </Card>
    </Link>
  );
}
