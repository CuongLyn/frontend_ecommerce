import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({
  children,
  type = "default", // "primary", "dashed", "link", "text", "default"
  htmlType = "button",
  onClick,
  disabled = false,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;