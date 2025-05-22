import { Col, Row, Image, InputNumber, Button } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/imageProduct.webp'
import imageProductSmall from '../../assets/images/imageProductSmall.webp'
import { WrapperAddressTextProduct, WrapperBtnQualityProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () => {
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <Row style={{padding: '12px', backgroundColor: '#FFFFFF', borderRadius: '4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '12px'}}>
          <Image src={imageProduct} alt = "image product" preview = {false}/>
          <Row style={{marginTop: '16px', justifyContent: 'space-between'}}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageProductSmall} alt = "image product small" preview = {false} />
            </WrapperStyleColImage>
            
          </Row>
        </Col>
        <Col span={14} style={{paddingLeft: '12px'}}>
          <WrapperStyleNameProduct>
            Sách chạng vạng 
          </WrapperStyleNameProduct>

          <div>
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />
            <StarFilled style={{fontSize: '16px', color: '#FFC70D'}} />

            <WrapperStyleTextSell> (Xem đánh giá)</WrapperStyleTextSell>
            <WrapperStyleTextSell> | Đã bán 10</WrapperStyleTextSell>
          </div>
          
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              24.000.000đ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>

          <WrapperAddressTextProduct>
            <span>Giao đến </span>
            <span className='address'>255 Nguyễn Xiển, Thanh Xuân, Hà Nội</span>
            <span className='change-address'> - Đổi địa chỉ</span>
          </WrapperAddressTextProduct>

          <div style={{margin: '16px 0 20px', padding: '12px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
            <div style={{marginBottom: '8px'}}>Số lượng</div>
            <WrapperQualityProduct>
              <Button style={{border: 'none', background: 'transparent'}}>
                <MinusOutlined style={{color: '#000', fontSize: '14px'}}/>
              </Button>
              <InputNumber defaultValue={3} onChange={onChange} size='small' />

              <Button style={{border: 'none', background: 'transparent'}}>
                <PlusOutlined style={{color: '#000', fontSize: '14px'}}/>
              </Button>
            </WrapperQualityProduct>
          </div>

          <div>
            <ButtonComponent
              size={20}
              styleButton={{background: 'rgb(255, 57, 69)', height: '48px', width: '220px', border: 'none', borderRadius: '4px'}}
              textButton={'Chọn mua'}
              styleTextButton={{color: '#fff'}}
            > 
            </ButtonComponent>

            <ButtonComponent
              size={20}
              styleButton={{background: '#fff', height: '48px', width: '220px', border: '1px solid rgb(10, 104, 255)', borderRadius: '4px', marginLeft: '12px'}}  
              textButton={'Mua trước trả sau'}
              styleTextButton={{color: 'rgb(10, 104, 255)'}}
            > 
            </ButtonComponent>
          </div>
        </Col>

    </Row>
  )
}

export default ProductDetailsComponent