import React, { Fragment } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperProducts, WrapperNavbar } from './style'
import { Col, Pagination, Row } from 'antd'

const TypeProductPage = () => {
  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  return (
    <div style={{padding: '0px 120px', backgroundColor: '#F5F5FA' }}>
        <Row style={{ flexWrap:'nowrap', paddingTop: '12px' }}>
            <WrapperNavbar span={4}>
                <NavbarComponent />
            </WrapperNavbar>
           <Col span={20} >
              <WrapperProducts span={20}>
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
              </WrapperProducts>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                <Pagination defaultCurrent={2} total={100} onChange={onChange} />
              </div>
            </Col>
        </Row>
    </div>
  )
}

export default TypeProductPage