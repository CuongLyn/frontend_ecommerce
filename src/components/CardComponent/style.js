import styled from "styled-components";
import { Card } from "antd";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        width: 200px;
        height: 200px;
        
    }
`
export const StyleNameProduct = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #27272a;
    line-height: 16px;
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    text-align: left;
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    margin-top: 4px;
`