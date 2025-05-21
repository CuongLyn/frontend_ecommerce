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
        <span style={{ whiteSpace: 'nowrap' }}>Đăng ký/Đăng nhập</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>Tài khoản</span>
          <CaretDownOutlined />
        </div>
      </div>
    </WrapperHeaderAccount>
  );
};

export default AccountComponent;
