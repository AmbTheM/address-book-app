import { SelectOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";
import { SettingsData } from "../Services/Database/DataType";

interface Props {
  layout: {
    labelCol: {
      span: number;
    };
    wrapperCol: {
      span: number;
    };
  };

  form: any;

  onFinish: ((values: any) => void) | undefined;
  Option: any;
  Nationalities: {
    Label: string;
    Value: string;
  }[];
  tailLayout: any;
  onReset: any;
  handleChange: any;
  Selected: SettingsData;
}

const SettingForm: React.FC<Props> = ({
  layout,
  form,
  handleChange,
  onFinish,
  Nationalities,
  Option,
  tailLayout,
  onReset,
  Selected,
}) => {
  return (
    <div className="settings-flex">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="form"
      >
        <Form.Item name="nationalities" label="Nationalities">
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="select one country"
            onChange={handleChange}
            optionLabelProp="label"
            defaultValue={Selected.nationalities?.map((nat) => {
              return nat;
            })}
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
            defaultValue={Selected.gender}
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
    </div>
  );
};

export default SettingForm;
