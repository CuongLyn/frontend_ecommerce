import React from 'react'
import {
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import { WrapperHeaderAccount } from '../HeaderComponent/style';

const AccountComponent = () => {
  return (
    <WrapperHeaderAccount>
      <UserOutlined style={{ fontSize: '24px' }} />
      <div>
        <span style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>Đăng ký/Đăng nhập</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ cursor: 'pointer' }}>Tài khoản</span>
          <CaretDownOutlined />
        </div>
      </div>
    </WrapperHeaderAccount>
  );
};

export default AccountComponent;
