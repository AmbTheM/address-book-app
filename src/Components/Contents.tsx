import { Avatar, Card, Col, Row } from "antd";
import React, { Ref } from "react";

const { Meta } = Card;

interface Props {
  data: any[];
  lastRefCallback: Ref<HTMLDivElement> | undefined;
  displayModal: React.Dispatch<React.SetStateAction<boolean>>;
  Modal(payload: any): void;
}

const Contents: React.FC<Props> = ({
  data,
  lastRefCallback,
  displayModal,
  Modal,
}) => {
  const results = data;

  return (
    <Row gutter={[8, 8]}>
      {results?.map((items, index) => {
        if (results.length === index + 1) {
          return (
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              <Card
                ref={lastRefCallback}
                key={index}
                onClick={() => {
                  displayModal(true);
                  Modal(index);
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
                  displayModal(true);
                  Modal(index);
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
};

export default Contents;
