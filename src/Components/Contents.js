import { Avatar, Card, Col, Row } from "antd";
import React from "react";

const { Meta } = Card;

function Contents(props) {
  const results = props.data;

  return (
    <Row gutter={[8, 8]}>
      {results?.map((items, index) => {
        if (results.length === index + 1) {
          return (
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Card
                ref={props.lastRefCalllback}
                key={index}
                onClick={() => {
                  props.displayModal(true);
                  props.Modal(index);
                }}
              >
                <Meta
                  avatar={<Avatar src={items.picture.thumbnail} />}
                  title={`${items.name.first} ${items.name.last}`}
                  description={`Username: ${items.login.username} \n Email: ${items.email}`}
                />
              </Card>
            </Col>
          );
        } else {
          return (
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Card
                key={index}
                onClick={() => {
                  props.displayModal(true);
                  props.Modal(index);
                }}
              >
                <Meta
                  avatar={<Avatar src={items.picture.thumbnail} />}
                  title={`${items.name.first} ${items.name.last}`}
                  description={`Username: ${items.login.username} \n Email: ${items.email}`}
                />
              </Card>
            </Col>
          );
        }
      })}
    </Row>
  );
}

export default Contents;
