import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { WrapperInputStyle } from './style';

const InputFormComponent = ({ placeholder = 'Nhập thông tin', value, onChange, type, ...rests }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div style={{ position: 'relative' }}>
            <WrapperInputStyle
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={inputType}
                {...rests}
            />
            {isPassword && (
                <div
                    onClick={togglePassword}
                    style={{
                        position: 'absolute',
                        fontSize: '16px',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        color: '#999'
                    }}
                >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
            )}
        </div>
    );
};

export default InputFormComponent;
