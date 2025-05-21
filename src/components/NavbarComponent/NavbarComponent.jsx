import React from 'react'
import { WrapperLabelText, WrapperItemText, WrapperContent, WrapperTextPrice } from './style'
import { Checkbox, Rate } from 'antd';


const NavbarComponent = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    const renderContent = (type, options) => {
       switch(type)
       {
        case 'text':
            return options.map(item => <WrapperItemText key={item}>{item}</WrapperItemText>);
        case 'checkbox':
            return (
                <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                    {options.map(item => (
                        <Checkbox key={item.value} value={item.value}>
                            {item.label}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            )
        case 'star':
            return options.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Rate disabled defaultValue={item} style={{ fontSize: '12px' }} />
                    <span style={{fontSize: '12px'}}>{`Từ ${item} sao` }</span>
                </div>
            ))
        case 'price':
            return options.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                   <WrapperTextPrice>{`Giá từ ${item}` }</WrapperTextPrice>
                </div>
            ))
        default:
            return {}
       }
    }

    return (
        <div>
            <WrapperLabelText>Danh mục sản phẩm</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'Điện thoại', 'Máy tính bảng', 'Laptop', 'Phụ kiện'])}
                {renderContent('checkbox', [
                {value: 'A', label: 'A'},
                {value: 'B', label: 'B'},
                {value: 'C', label: 'C'},
                ])}
                {renderContent('star', [3, 4, 5])}
                {renderContent('price', ['10.000đ', '20.000đ', '30.000.000đ', '40.000đ'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent