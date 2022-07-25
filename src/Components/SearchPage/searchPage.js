import { Input, Card, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

function SearchPage() {
  const onTyping = () => {};

  return (
    <>
      <div className="searchBox">
        <Input
          size="large"
          placeholder="Type to start searching"
          prefix={<UserOutlined />}
          onChange={onTyping}
        />
      </div>
      <div className="content"></div>
    </>
  );
}

export default SearchPage;
