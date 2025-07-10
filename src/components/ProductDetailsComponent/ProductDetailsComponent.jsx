import { Col, Row, Image, InputNumber, Button, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import imageProduct from '../../assets/images/imageProduct.webp'
import imageProductSmall from '../../assets/images/imageProductSmall.webp'
import { WrapperAddressTextProduct, WrapperBtnQualityProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { addOrderProduct } from '../../redux/slides/cartSlide'

const ProductDetailsComponent = (props) => {
  const { productData = {} } = props
  const dispatch = useDispatch()
  const [numProduct, setNumProduct] = useState(1)

  const onChange = (value) => {
    setNumProduct(Number(value))
  }

  const handleChangeCount = (type, limited) => {
    if (type === 'increase') {
      if (!limited) {
        setNumProduct(numProduct + 1)
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1)
      }
    }
  }

  const handleAddOrderProduct = () => {
    if (!productData?._id) {
      message.error('Không tìm thấy thông tin sản phẩm')
      return
    }
    
    dispatch(addOrderProduct({
      orderItem: {
        name: productData?.name || 'Sản phẩm mẫu',
        amount: numProduct,
        image: productData?.image || imageProduct,
        price: productData?.price || 24000000,
        product: productData?._id || 'sample-product-id',
        discount: productData?.discount || 0,
        countInStock: productData?.countInStock || 10
      }
    }))
    message.success('Đã thêm sản phẩm vào giỏ hàng')
  }
  return (
    <Row style={{padding: '12px', backgroundColor: '#FFFFFF', borderRadius: '4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '12px'}}>
          <Image src={productData?.image || imageProduct} alt = "image product" preview = {false}/>
          <Row style={{marginTop: '16px', justifyContent: 'space-between'}}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={productData?.image || imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            
          </Row>
        </Col>
        <Col span={14} style={{paddingLeft: '12px'}}>
          <WrapperStyleNameProduct>
            {productData?.name || 'Sách chạng vạng'}
          </WrapperStyleNameProduct>

          <div>
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />

            <WrapperStyleTextSell> (Xem {productData?.rating || '4.5'} đánh giá)</WrapperStyleTextSell>
            <WrapperStyleTextSell> | Đã bán {productData?.selled || 10}</WrapperStyleTextSell>
          </div>
          
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              {(productData?.price || 24000000)?.toLocaleString()}đ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>

          <WrapperAddressTextProduct>
            <span>Giao đến </span>
            <span className='address'>255 Nguyễn Xiển, Thanh Xuân, Hà Nội</span>
            <span className='change-address'> - Đổi địa chỉ</span>
          </WrapperAddressTextProduct>

          <div style={{margin: '16px 0 20px', padding: '12px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
            <div style={{marginBottom: '8px'}}>Số lượng (còn {productData?.countInStock || 10} sản phẩm)</div>
            <WrapperQualityProduct>
              <Button 
                style={{border: 'none', background: 'transparent'}}
                onClick={() => handleChangeCount('decrease', numProduct === 1)}
                disabled={numProduct === 1}
              >
                <MinusOutlined style={{color: '#000', fontSize: '14px'}}/>
              </Button>
              <InputNumber 
                value={numProduct} 
                onChange={onChange} 
                size='small' 
                min={1}
                max={productData?.countInStock || 10}
              />

              <Button 
                style={{border: 'none', background: 'transparent'}}
                onClick={() => handleChangeCount('increase', numProduct === (productData?.countInStock || 10))}
                disabled={numProduct === (productData?.countInStock || 10)}
              >
                <PlusOutlined style={{color: '#000', fontSize: '14px'}}/>
              </Button>
            </WrapperQualityProduct>
          </div>

          <div>
            <ButtonComponent
              size={20}
              styleButton={{background: 'rgb(255, 57, 69)', height: '48px', width: '220px', border: 'none', borderRadius: '4px'}}
              textButton={'Thêm vào giỏ hàng'}
              styleTextButton={{color: '#fff'}}
              onClick={handleAddOrderProduct}
            > 
            </ButtonComponent>

            <ButtonComponent
              size={20}
              styleButton={{background: '#fff', height: '48px', width: '220px', border: '1px solid rgb(10, 104, 255)', borderRadius: '4px', marginLeft: '12px'}}  
              textButton={'Mua ngay'}
              styleTextButton={{color: 'rgb(10, 104, 255)'}}
              onClick={handleAddOrderProduct}
            > 
            </ButtonComponent>
          </div>
        </Col>

    </Row>
  )
}

export default ProductDetailsComponent