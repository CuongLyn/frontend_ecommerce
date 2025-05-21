import React from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const InputComponent = ({ placeholder, onSearch }) => {
  const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1890ff' }} />;

  return (
    <Search
      placeholder={placeholder}
      allowClear
      enterButton="Search"
      suffix={suffix}
      onSearch={onSearch}
    />
  );
};

export default InputComponent;
