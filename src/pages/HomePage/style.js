import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    font-size: 16px;
    border-bottom: 1px solid rgb(139, 138, 138);
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    border: 1px solid rgb(11, 116, 229);
    color: rgb(11, 116, 229);
    width: 240px;
    height: 38px;
    font-weight: 600;
    border-radius: 4px;
    text-align: center;
    &:hover {
        background-color: rgb(13, 92, 192) !important;
        color: white !important;
    }
`

export const WrapperProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    margin-top: 20px;
    width: 100%;
`