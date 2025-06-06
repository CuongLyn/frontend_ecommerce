
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import { Image } from 'antd'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imgLogo from '../../assets/images/imgSignIn.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
const SignUpPage = () => {

  const navigate = useNavigate();
  const handleNavigateToSignIn = () => {
    // Navigate to sign-in page
    navigate('/sign-in');
  }

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Sign Up with:', { email, password, confirmPassword });
    mutation.mutate({ 
      email, password, confirmPassword 
    });
   
  }

  //call api
  const mutation = useMutationHooks(
    data => UserService.signUpUser(data)
  );

  console.log('mutation: ', mutation)

  const { data, isPending } = mutation


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{width: '800px', height: '444px', borderRadius: '12px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h4 style={{fontSize: '24px', fontWeight: '500', margin: '0 0 10px'}}>Xin chào</h4>
          <p style={{margin: '0', fontSize: '15px', marginBottom: '10px'}}>Đăng nhập ký tài khoản</p>
          <InputFormComponent  style={{marginBottom: '10px'}} placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />

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
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
          <LoadingComponent isPending={isPending} >
            <ButtonComponent
              disabled={!email.length || !confirmPassword.length || !password.length}
              onClick={handleSignUp}
              size={20}
              styleButton={{
                background: (!email.length || !password.length || !confirmPassword.length) ? '#ccc' : 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px',
                cursor: (!email.length || !password.length || !confirmPassword.length) ? 'not-allowed' : 'pointer'
              }}
              textButton={'Đăng ký'}
              styleTextButton={{color: '#fff'}}
            > 
            </ButtonComponent>
          </LoadingComponent>

          <WrapperTextLight>
            <span>Quên mật khẩu?</span>
          </WrapperTextLight>
          <span style={{fontSize: '14px', textAlign: 'center'}}>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateToSignIn}> Đăng nhập ngay</WrapperTextLight></span>
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