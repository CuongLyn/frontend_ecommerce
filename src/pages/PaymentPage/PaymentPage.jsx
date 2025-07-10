import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button, Radio, Card, Row, Col, Typography, Space, Divider, message, Steps } from 'antd'
import { EnvironmentOutlined, CreditCardOutlined, SafetyOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { clearCart } from '../../redux/slides/cartSlide'

const { Title, Text } = Typography

const WrapperPaymentPage = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`

const WrapperPaymentContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const WrapperOrderSummary = styled(Card)`
  .ant-card-body {
    padding: 24px;
  }
`

const PaymentPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const [form] = Form.useForm()
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [current, setCurrent] = useState(0)
  
  const selectedItems = cart?.orderItemsSelected || cart?.orderItems || []

  const priceMemo = useMemo(() => {
    const result = selectedItems?.reduce((total, cur) => {
      return total + ((cur.price * cur.amount))
    }, 0)
    return result
  }, [selectedItems])

  const priceDiscountMemo = useMemo(() => {
    const result = selectedItems?.reduce((total, cur) => {
      const totalDiscount = cur.discount ? cur.discount : 0
      return total + (priceMemo * (totalDiscount * cur.amount) / 100)
    }, 0)
    if (Number(result)) {
      return result
    }
    return 0
  }, [selectedItems])

  const deliveryPriceMemo = useMemo(() => {
    if (priceMemo >= 200000 && priceMemo < 500000) {
      return 10000
    } else if (priceMemo >= 500000 || selectedItems?.length === 0) {
      return 0
    } else {
      return 20000
    }
  }, [priceMemo])

  const totalPriceMemo = useMemo(() => {
    return Number(priceMemo) - Number(priceDiscountMemo) + Number(deliveryPriceMemo)
  }, [priceMemo, priceDiscountMemo, deliveryPriceMemo])

  const handleFinish = (values) => {
    const orderData = {
      ...values,
      paymentMethod,
      orderItems: selectedItems,
      itemsPrice: priceMemo,
      shippingPrice: deliveryPriceMemo,
      totalPrice: totalPriceMemo,
      createdAt: new Date().toISOString()
    }
    
    console.log('Order data:', orderData)
    message.success('Đặt hàng thành công! Cảm ơn bạn đã mua hàng.')
    
    // Clear cart and navigate
    dispatch(clearCart())
    navigate('/order-success', { state: { orderData } })
  }

  const steps = [
    {
      title: 'Thông tin giao hàng',
      icon: <EnvironmentOutlined />,
    },
    {
      title: 'Phương thức thanh toán',
      icon: <CreditCardOutlined />,
    },
    {
      title: 'Xác nhận đơn hàng',
      icon: <SafetyOutlined />,
    },
  ]

  if (selectedItems?.length === 0) {
    return (
      <WrapperPaymentPage>
        <WrapperPaymentContent>
          <Card style={{ textAlign: 'center', padding: '40px' }}>
            <Title level={3}>Không có sản phẩm nào được chọn</Title>
            <Button type="primary" onClick={() => navigate('/cart')}>
              Quay lại giỏ hàng
            </Button>
          </Card>
        </WrapperPaymentContent>
      </WrapperPaymentPage>
    )
  }

  return (
    <WrapperPaymentPage>
      <WrapperPaymentContent>
        <Title level={2}>Thanh toán</Title>
        
        <Steps current={current} items={steps} style={{ marginBottom: '24px' }} />
        
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={14}>
            <Card title="Thông tin đặt hàng">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                  fullName: '',
                  phone: '',
                  address: '',
                  city: 'Hà Nội',
                  district: '',
                  ward: ''
                }}
              >
                <Title level={4}>
                  <EnvironmentOutlined /> Thông tin giao hàng
                </Title>
                
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="fullName"
                      rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                    >
                      <Input placeholder="Nhập họ và tên" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Số điện thoại"
                      name="phone"
                      rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' }
                      ]}
                    >
                      <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                >
                  <Input placeholder="Số nhà, tên đường" />
                </Form.Item>
                
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label="Tỉnh/Thành phố"
                      name="city"
                      rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố!' }]}
                    >
                      <Input placeholder="Tỉnh/Thành phố" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Quận/Huyện"
                      name="district"
                      rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}
                    >
                      <Input placeholder="Quận/Huyện" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Phường/Xã"
                      name="ward"
                      rules={[{ required: true, message: 'Vui lòng chọn phường/xã!' }]}
                    >
                      <Input placeholder="Phường/Xã" />
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />
                
                <Title level={4}>
                  <CreditCardOutlined /> Phương thức thanh toán
                </Title>
                
                <Radio.Group
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Radio value="cod">
                      <Space>
                        <span>Thanh toán khi nhận hàng (COD)</span>
                        <Text type="secondary">- Phí COD: 0đ</Text>
                      </Space>
                    </Radio>
                    <Radio value="banking">
                      <Space>
                        <span>Chuyển khoản ngân hàng</span>
                        <Text type="secondary">- Miễn phí</Text>
                      </Space>
                    </Radio>
                    <Radio value="momo">
                      <Space>
                        <span>Ví MoMo</span>
                        <Text type="secondary">- Miễn phí</Text>
                      </Space>
                    </Radio>
                  </Space>
                </Radio.Group>

                <Form.Item style={{ marginTop: '24px' }}>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Đặt hàng
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          
          <Col xs={24} lg={10}>
            <WrapperOrderSummary title="Thông tin đơn hàng">
              <Space direction="vertical" style={{ width: '100%' }}>
                {selectedItems?.map((item) => (
                  <div key={item.product} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '12px' }}
                      />
                      <div>
                        <Text strong>{item.name}</Text>
                        <br />
                        <Text type="secondary">SL: {item.amount}</Text>
                      </div>
                    </div>
                    <Text strong>{(item.price * item.amount)?.toLocaleString()}₫</Text>
                  </div>
                ))}
                
                <Divider />
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Tạm tính:</Text>
                  <Text>{priceMemo?.toLocaleString()}₫</Text>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Giảm giá:</Text>
                  <Text style={{ color: '#52c41a' }}>-{priceDiscountMemo?.toLocaleString()}₫</Text>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Phí giao hàng:</Text>
                  <Text>{deliveryPriceMemo?.toLocaleString()}₫</Text>
                </div>
                
                <Divider />
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text strong style={{ fontSize: '16px' }}>Tổng cộng:</Text>
                  <Text strong style={{ color: '#ff4d4f', fontSize: '18px' }}>
                    {totalPriceMemo?.toLocaleString()}₫
                  </Text>
                </div>
              </Space>
            </WrapperOrderSummary>
          </Col>
        </Row>
      </WrapperPaymentContent>
    </WrapperPaymentPage>
  )
}

export default PaymentPage