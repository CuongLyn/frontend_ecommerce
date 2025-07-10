import React from 'react'
import { Result, Button, Card, Typography, Space, Divider } from 'antd'
import { CheckCircleOutlined, HomeOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const { Text, Title } = Typography

const WrapperSuccessPage = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`

const WrapperSuccessContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const OrderSuccessPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const orderData = location.state?.orderData

  const generateOrderId = () => {
    return 'ORD' + Date.now().toString().slice(-8)
  }

  return (
    <WrapperSuccessPage>
      <WrapperSuccessContent>
        <Result
          icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
          title="Đặt hàng thành công!"
          subTitle={`Mã đơn hàng: ${generateOrderId()}`}
          extra={[
            <Button type="primary" key="home" icon={<HomeOutlined />} onClick={() => navigate('/')}>
              Về trang chủ
            </Button>,
            <Button key="continue" icon={<ShoppingOutlined />} onClick={() => navigate('/products')}>
              Tiếp tục mua sắm
            </Button>,
          ]}
        />

        {orderData && (
          <Card title="Thông tin đơn hàng" style={{ marginTop: '24px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Title level={5}>Thông tin giao hàng:</Title>
                <Text>Họ tên: {orderData.fullName}</Text><br />
                <Text>Số điện thoại: {orderData.phone}</Text><br />
                <Text>Địa chỉ: {orderData.address}, {orderData.ward}, {orderData.district}, {orderData.city}</Text>
              </div>

              <Divider />

              <div>
                <Title level={5}>Phương thức thanh toán:</Title>
                <Text>
                  {orderData.paymentMethod === 'cod' && 'Thanh toán khi nhận hàng (COD)'}
                  {orderData.paymentMethod === 'banking' && 'Chuyển khoản ngân hàng'}
                  {orderData.paymentMethod === 'momo' && 'Ví MoMo'}
                </Text>
              </div>

              <Divider />

              <div>
                <Title level={5}>Sản phẩm đã đặt:</Title>
                {orderData.orderItems?.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <Text>{item.name} x {item.amount}</Text>
                    <Text strong>{(item.price * item.amount)?.toLocaleString()}₫</Text>
                  </div>
                ))}
              </div>

              <Divider />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text strong style={{ fontSize: '16px' }}>Tổng tiền:</Text>
                <Text strong style={{ color: '#ff4d4f', fontSize: '18px' }}>
                  {orderData.totalPrice?.toLocaleString()}₫
                </Text>
              </div>
            </Space>
          </Card>
        )}

        <Card style={{ marginTop: '24px', textAlign: 'center' }}>
          <Title level={4}>Cảm ơn bạn đã mua hàng!</Title>
          <Text>
            Đơn hàng của bạn đang được xử lý. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
          </Text>
          <br />
          <Text type="secondary">
            Thời gian giao hàng dự kiến: 2-3 ngày làm việc
          </Text>
        </Card>
      </WrapperSuccessContent>
    </WrapperSuccessPage>
  )
}

export default OrderSuccessPage