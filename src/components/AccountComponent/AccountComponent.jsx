import React from 'react'
import {
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import { WrapperHeaderAccount } from '../HeaderComponent/style';
import { useNavigate } from 'react-router-dom';

const AccountComponent = () => {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    // Navigate to login page
    navigate('/sign-in');

  }
  return (
    <WrapperHeaderAccount>
      <UserOutlined style={{ fontSize: '24px' }} />
      <div onClick={handleNavigateToLogin}>
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
