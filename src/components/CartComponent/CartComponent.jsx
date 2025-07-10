import React from 'react'
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { WrapperHeaderAccount } from '../HeaderComponent/style';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  
  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cart?.orderItems?.reduce((total, item) => total + item.amount, 0) || 0

  const handleNavigateCart = () => {
    navigate('/cart')
  }

  return (
    <WrapperHeaderAccount onClick={handleNavigateCart}>
      <Badge count={totalItems} size='small' style={{ backgroundColor: '#FF4C59' }}>
        <ShoppingCartOutlined style={{ fontSize: '24px', color: '#FFFFFF' }} />
      </Badge>
      <span style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>Giỏ hàng</span>
    </WrapperHeaderAccount>
  )
}

export default CartComponent