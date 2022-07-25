import { Avatar, Card, Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useData } from "./useData";

const { Meta } = Card;

function Contents() {
  const observer = useRef(null);

  const lastRefCalllback = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {});
    if (node) observer.current.observe(node);
  });
}
