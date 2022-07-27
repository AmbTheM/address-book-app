import { Button, Form, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../Redux/Actions";
import React from "react";

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
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Nationalities = [
  { Label: "Australia", Value: "au" },
  { Label: "Brazil", Value: "br" },
  { Label: "Canada", Value: "ca" },
  { Label: "China", Value: "ch" },
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

  const onFinish = (values) => {
    storeData({ storage: [] });
    saveSettings(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="nationalities" label="Nationalities">
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder="select one country"
          onChange={handleChange}
          optionLabelProp="label"
        >
          {Nationalities.map((items) => (
            <Option key={items.Value} value={items.Value} label={items.Label}>
              <div className="demo-option-label-item">
                <span role="img" aria-label={items.Label}></span>
                {items.Label}
              </div>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SettingsPage;
