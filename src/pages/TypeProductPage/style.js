import { Col } from 'antd';
import styled from 'styled-components';

export const WrapperProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    margin-top: 20px;
    width: 100%;
`

export const WrapperNavbar = styled(Col)`
    background-color: white;
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    margin-top: 20px;
    height: fit-content;
`