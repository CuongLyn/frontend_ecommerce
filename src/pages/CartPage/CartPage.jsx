import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Table, InputNumber, Space, Checkbox, Image, Typography, Row, Col, Card, Divider, message } from 'antd'
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons'
import { increaseAmount, decreaseAmount, removeOrderProduct, removeAllOrderProduct, selectedOrder } from '../../redux/slides/cartSlide'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const { Title, Text } = Typography

const WrapperCartPage = styled.div`
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`

const WrapperCartContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const WrapperEmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 8px;
  
  .empty-icon {
    font-size: 64px;
    color: #ccc;
    margin-bottom: 16px;
  }
`

const WrapperSummary = styled(Card)`
  .ant-card-body {
    padding: 24px;
  }
`

const CartPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const [listChecked, setListChecked] = useState([])

  const handleOnChangeAmount = (type, idProduct, limited) => {
    if (type === 'increase') {
      if (!limited) {
        dispatch(increaseAmount({ idProduct }))
      }
    } else {
      if (!limited) {
        dispatch(decreaseAmount({ idProduct }))
      }
    }
  }

  const handleDeleteOrder = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }))
    message.success('Đã xóa sản phẩm khỏi giỏ hàng')
  }

  const handleOnchangeCheckAll = (e) => {
    if (e.target.checked) {
      const newListChecked = cart?.orderItems?.map((item) => item?.product)
      setListChecked(newListChecked)
    } else {
      setListChecked([])
    }
  }

  const onChange = (e, idProduct) => {
    if (listChecked.includes(idProduct)) {
      const newListChecked = listChecked.filter((item) => item !== idProduct)
      setListChecked(newListChecked)
    } else {
      setListChecked([...listChecked, idProduct])
    }
  }

  const handleRemoveAllOrder = () => {
    if (listChecked?.length > 1) {
      dispatch(removeAllOrderProduct({ listChecked }))
      setListChecked([])
      message.success('Đã xóa các sản phẩm được chọn')
    }
  }

  const handleAddCard = () => {
    if (!listChecked?.length) {
      message.error('Vui lòng chọn sản phẩm')
    } else {
      dispatch(selectedOrder({ listChecked }))
      navigate('/payment')
    }
  }

  const priceMemo = useMemo(() => {
    const result = cart?.orderItems?.reduce((total, cur) => {
      return total + ((cur.price * cur.amount))
    }, 0)
    return result
  }, [cart])

  const priceDiscountMemo = useMemo(() => {
    const result = cart?.orderItems?.reduce((total, cur) => {
      const totalDiscount = cur.discount ? cur.discount : 0
      return total + (priceMemo * (totalDiscount * cur.amount) / 100)
    }, 0)
    if (Number(result)) {
      return result
    }
    return 0
  }, [cart])

  const deliveryPriceMemo = useMemo(() => {
    if (priceMemo >= 200000 && priceMemo < 500000) {
      return 10000
    } else if (priceMemo >= 500000 || cart?.orderItems?.length === 0) {
      return 0
    } else {
      return 20000
    }
  }, [priceMemo])

  const totalPriceMemo = useMemo(() => {
    return Number(priceMemo) - Number(priceDiscountMemo) + Number(deliveryPriceMemo)
  }, [priceMemo, priceDiscountMemo, deliveryPriceMemo])

  const columns = [
    {
      title: (
        <Checkbox
          onChange={handleOnchangeCheckAll}
          checked={listChecked?.length === cart?.orderItems?.length}
        >
          Tất cả ({cart?.orderItems?.length} sản phẩm)
        </Checkbox>
      ),
      dataIndex: 'checkbox',
      render: (_, record) => (
        <Checkbox
          onChange={(e) => onChange(e, record?.product)}
          checked={listChecked.includes(record?.product)}
        />
      ),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'product',
      render: (_, record) => (
        <Space>
          <Image
            src={record?.image}
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
            preview={false}
          />
          <div>
            <Text strong>{record?.name}</Text>
          </div>
        </Space>
      ),
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      render: (price) => (
        <Text>{price?.toLocaleString()}₫</Text>
      ),
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      render: (amount, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => handleOnChangeAmount('decrease', record?.product, amount === 1)}
            disabled={amount === 1}
          >
            -
          </Button>
          <InputNumber
            min={1}
            max={record?.countInStock}
            value={amount}
            size="small"
            style={{ width: '60px' }}
            readOnly
          />
          <Button
            size="small"
            onClick={() => handleOnChangeAmount('increase', record?.product, amount === record?.countInStock)}
            disabled={amount === record?.countInStock}
          >
            +
          </Button>
        </Space>
      ),
    },
    {
      title: 'Thành tiền',
      dataIndex: 'total',
      render: (_, record) => (
        <Text strong style={{ color: '#ff4d4f' }}>
          {(record?.price * record?.amount)?.toLocaleString()}₫
        </Text>
      ),
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      render: (_, record) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteOrder(record?.product)}
        >
          Xóa
        </Button>
      ),
    },
  ]

  if (cart?.orderItems?.length === 0) {
    return (
      <WrapperCartPage>
        <WrapperCartContent>
          <WrapperEmptyCart>
            <ShoppingOutlined className="empty-icon" />
            <Title level={3}>Giỏ hàng trống</Title>
            <Text>Bạn chưa có sản phẩm nào trong giỏ hàng</Text>
            <br />
            <Button 
              type="primary" 
              size="large" 
              style={{ marginTop: '16px' }}
              onClick={() => navigate('/')}
            >
              Tiếp tục mua sắm
            </Button>
          </WrapperEmptyCart>
        </WrapperCartContent>
      </WrapperCartPage>
    )
  }

  return (
    <WrapperCartPage>
      <WrapperCartContent>
        <Title level={2}>Giỏ hàng của bạn</Title>
        
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Card>
              <Table
                columns={columns}
                dataSource={cart?.orderItems}
                rowKey="product"
                pagination={false}
                scroll={{ x: 800 }}
              />
              
              <div style={{ marginTop: '16px', textAlign: 'left' }}>
                <Button
                  danger
                  disabled={listChecked?.length === 0}
                  onClick={handleRemoveAllOrder}
                >
                  Xóa ({listChecked?.length}) sản phẩm đã chọn
                </Button>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} lg={8}>
            <WrapperSummary title="Thông tin đơn hàng">
              <Space direction="vertical" style={{ width: '100%' }}>
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
                
                <Divider style={{ margin: '12px 0' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text strong>Tổng tiền:</Text>
                  <Text strong style={{ color: '#ff4d4f', fontSize: '18px' }}>
                    {totalPriceMemo?.toLocaleString()}₫
                  </Text>
                </div>
                
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={handleAddCard}
                  style={{ marginTop: '16px' }}
                >
                  Mua hàng ({listChecked?.length})
                </Button>
              </Space>
            </WrapperSummary>
          </Col>
        </Row>
      </WrapperCartContent>
    </WrapperCartPage>
  )
}

export default CartPage