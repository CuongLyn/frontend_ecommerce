import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({
  children,
  type = "default",
  htmlType = "button",
  onClick,
  disabled = false,
  className = "",
  styleButton = {},
  textButton,
  styleTextButton = {},
  ...rest
}) => {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={styleButton}
      {...rest}
    >
      <span style={styleTextButton}>
        {textButton || children}
      </span>
    </Button>
  );
};

export default ButtonComponent;