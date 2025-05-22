import styled from "styled-components";
import { Col, Image, InputNumber } from "antd";

export const WrapperStyleImageSmall = styled(Image)`
  width: 64px !important;
  height: 64px !important;
`
export const WrapperStyleColImage = styled(Col)`
  flex-basis: unset !important;
  display: flex !important;
`

export const WrapperStyleNameProduct = styled.div`
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`

export const WrapperStyleTextSell = styled.span `
    color: rgb(128, 128, 137);
    font-size: 14px;
    line-height: 24px;
`

export const WrapperPriceProduct = styled.div `
    background-color: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1 `
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    padding: 10px;
    color: rgb(255, 66, 78);
    margin-top: 10px;
    
`   

export const WrapperAddressTextProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        t4ext-overflow: ellipsis;
    },
    span.change-address {
        
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: rgb(11, 116, 229);
        margin-left: 5px;
        flex-shrink: 0;
    }

`  

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 150px;
`



  
