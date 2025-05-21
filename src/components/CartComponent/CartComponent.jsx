import React from 'react'
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { WrapperHeaderAccount } from '../HeaderComponent/style';
import { Badge } from 'antd';
const CartComponent = () => {
  return (
    <WrapperHeaderAccount>
      <Badge count={5} size='small' style={{ backgroundColor: '#FF4C59' }}>
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#FFFFFF' }} />
      </Badge>
      <span style={{ whiteSpace: 'nowrap' }}>Giỏ hàng</span>
    </WrapperHeaderAccount>
  )
}

export default CartComponent