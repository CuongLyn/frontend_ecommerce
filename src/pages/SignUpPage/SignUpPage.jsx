
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import { Image } from 'antd'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imgLogo from '../../assets/images/imgSignIn.png'
import React, { useState } from 'react';
const SignUpPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{width: '800px', height: '444px', borderRadius: '12px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h4 style={{fontSize: '24px', fontWeight: '500', margin: '0 0 10px'}}>Xin chào</h4>
          <p style={{margin: '0', fontSize: '15px', marginBottom: '10px'}}>Đăng nhập ký tài khoản</p>
          <InputFormComponent  style={{marginBottom: '10px'}} placeholder="Nhập email" />

          <InputFormComponent
            placeholder="Nhập mật khẩu"
            type="password"
            style={{ marginBottom: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputFormComponent
            placeholder="Nhập lại mật khẩu"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ButtonComponent
            size={20}
            styleButton={{background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px'}}
            textButton={'Tiếp tục'}
            styleTextButton={{color: '#fff'}}
          > 
          </ButtonComponent>

          <WrapperTextLight>
            <span>Quên mật khẩu?</span>
          </WrapperTextLight>
          <span style={{fontSize: '14px', textAlign: 'center'}}>Bạn đã có tài khoản? <WrapperTextLight> Đăng nhập ngay</WrapperTextLight></span>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imgLogo} preview={false} alt='img-logo' height={'203px'} width={'203px'}/>
          <h4 style={{margin: '0 0 5px', color: 'rgb(10, 104, 255)', fontSize: '18px', fontWeight: '500px', lineHeight: '24px'}}>Mua sắm tại tiki</h4>
          <span style={{color: 'rgb(10, 104, 255)', fontSize: '14px', fontWeight: '400', lineHeight: '20px'}}>Siêu ưu đãi mỗi ngày</span>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage