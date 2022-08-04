import { Button, Form, message, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../Redux/Actions";
import React from "react";
import type { RootState } from "../../Redux/configureStore";
import SettingForm from "../../Components/Form";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const handleChange = (value: any) => {
  console.log(`selected ${value}`);
};
const Nationalities = [
  { Label: "Australia", Value: "au" },
  { Label: "Brazil", Value: "br" },
  { Label: "Canada", Value: "ca" },
  { Label: "Switzerland", Value: "ch" },
  { Label: "Germany", Value: "de" },
  { Label: "Denmark", Value: "dk" },
  { Label: "Spain", Value: "sp" },
  { Label: "Finland", Value: "fi" },
  { Label: "France", Value: "fr" },
  { Label: "United Kingdom", Value: "gb" },
  { Label: "Ireland", Value: "ie" },
  { Label: "India", Value: "in" },
  { Label: "Iran", Value: "ir" },
  { Label: "Mexico", Value: "mx" },
  { Label: "Netherlands", Value: "nl" },
  { Label: "Norway", Value: "no" },
  { Label: "New Zealand", Value: "nz" },
  { Label: "Russia", Value: "rs" },
  { Label: "Turkey", Value: "tr" },
  { Label: "Ukraine", Value: "ua" },
  { Label: "United States", Value: "us" },
];
function SettingsPage() {
  const dispatch = useDispatch();
  const { saveSettings, storeData } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    storeData([]);
    saveSettings(values);
    message.success("Settings Saved");
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <SettingForm
      layout={layout}
      form={form}
      onFinish={onFinish}
      handleChange={handleChange}
      Nationalities={Nationalities}
      Option={Option}
      tailLayout={tailLayout}
      onReset={onReset}
    />
  );
}

export default SettingsPage;
