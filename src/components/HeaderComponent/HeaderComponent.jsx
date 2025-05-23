import React from "react";
import { Col } from 'antd';


import InputComponent from '../InputComponent/InputComponent';

import {
  WrapperHeader,
  WrapperHeaderText,
} from "./style";

import AccountComponent from "../AccountComponent/AccountComponent";
import CartComponent from "../CartComponent/CartComponent";


const HeaderComponent = () => {

    // Hàm xử lý khi người dùng nhấn nút "Search"
    const onSearch = (value) => {
        console.log("Bạn đã tìm kiếm:", value);
    };

    return (
        <div className="header">
            <WrapperHeader gutter={[16, 16]} align="middle">
                <Col span={5}>
                    <WrapperHeaderText>Logo</WrapperHeaderText>
                </Col>
                <Col span={13}>
                    <InputComponent placeholder="Nhập từ khóa tìm kiếm" onSearch={onSearch} />
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
