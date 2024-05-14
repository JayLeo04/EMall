import React, { useState, useEffect } from "react";
import { Card, Space, Input } from "antd";
import PrivateLayout from "../components/layout";
import BookList from "../components/book_list";
import Slideshow from "../components/slide_show";
const { Search } = Input;

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error("Fetching books failed", error));
  }, []); // 空数组确保这个effect只在组件加载时运行一次

  return (
      <PrivateLayout>
        <Card className="card-container">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Search
                placeholder="输入关键字"
                // onSearch={}
                enterButton
                size="large"
            />
            <Slideshow />
            <BookList
                books={books}
            />
          </Space>
        </Card>
      </PrivateLayout>
  );
}