import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;

const NavBar: React.FC = () => {
  const HomePage = <Link to="/"> Home </Link>;
  const SettingsPage = <Link to="/settings"> Settings </Link>;

  return (
    <Layout className="navBar">
      <Header>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: 1, label: HomePage },
            { key: 2, label: SettingsPage },
          ]}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;
