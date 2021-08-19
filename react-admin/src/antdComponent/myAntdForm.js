// antd from表单 封装
import React from 'react'
import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const footerBtn = {
  textAlign: 'right'
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    name: 'name为空',
    pass: 'pass为空',
  },
};
/* eslint-enable no-template-curly-in-string */

export default function MyAntdForm (props) {
  let { onSubmit } = props

  const onFinish = (values) => {
    onSubmit(values)
  };

  return (
    <Form {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[{required: true},]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'pass']}
        label="Pass"
        rules={[{required: true},]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        style={footerBtn}
        wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



