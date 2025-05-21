import React from 'react';

import { StyleNameProduct,
         WrapperReportText,
         WrapperPriceText,
          WrapperCardStyle
          } from './style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
       bodyStyle={{ padding: '8px' }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >

      <StyleNameProduct>Iphone 15 </StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.96 </span> <StarFilled style={{fontSize: '10px', color: '#FFC70D'}} />
        </span>
        <span style={{ marginLeft: '8px'}}> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        <span>24.000.000đ</span>
        <span style={{fontSize: '12px'}}> -6%</span>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
