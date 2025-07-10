import React from "react";
import { Col } from 'antd';

import {
  WrapperHeader,
  WrapperHeaderText,
} from "./style";

import AccountComponent from "../AccountComponent/AccountComponent";
import CartComponent from "../CartComponent/CartComponent";
import SearchComponent from "../SearchComponent/SearchComponent";


const HeaderComponent = () => {
    return (
        <div className="header">
            <WrapperHeader gutter={[16, 16]} align="middle">
                <Col span={5}>
                    <WrapperHeaderText>TIKI CLONE</WrapperHeaderText>
                </Col>
                <Col span={13}>
                    <SearchComponent placeholder="Tìm kiếm sản phẩm, thương hiệu bạn mong muốn..." />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'flex-end'}}>
                   <AccountComponent/>
                   <CartComponent />
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;
