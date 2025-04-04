import { useState, useContext } from "react";
import { Button, Container, Form, Input, Title } from "../../styles/Styles";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [memberId, setmemberId] = useState('');
    const [memberPw, setmemberPw] = useState('');
    const [msg, setMsg] = useState('');
    const {auth, login} = useContext(AuthContext);
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        const regexp = /^[a-zA-Z0-9]{5,15}$/;

        if(!regexp.test(memberId)){
            setMsg("아이디 값이 유효하지 않음");
            return;
        }

        
        axios.post('http://localhost/auth/login',{
            memberId : memberId,
            memberPw : memberPw,
        })
        .then((result) => {
            //  console.log(result.data);
            const {memberNo, memberName, memberId, accessToken, refreshToken} 
            = result.data;
            login(memberNo, memberId, memberName, accessToken, refreshToken);
           /*
            localStorage.setItem("memberId", memberId); // 브라우저 꺼도 안날라감
            localStorage.setItem("memberName", memberName);
            localStorage.setItem("memberNo", memberNo);
            localStorage.setItem("accessToken", accessToken); 
            localStorage.setItem("refreshToken", refreshToken); 
            // sessionStorage.setItem(); 브라우저 끄면 날라감
            */
           alert("로그인 성공");
           window.location.href = "/";
        })
        .catch((error) => {
            console.log(error);
            alert(error.response.data['error-message']);
        });
        
    };

  return (
    <>
      <Container>
        <Form onSubmit={handleLogin}>
          <Title>로그인</Title>
          <Input type="text" placeholder="아이디를 입력해주세요." required 
          onChange={e => setmemberId(e.target.value)}
          />
          <label style={{fontSize: "13px", color:"crimson", padding: "4px"}}>{msg}</label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
            onChange={e => setmemberPw(e.target.value)}
          />
          <Button type="submit">즐거운 로그인하기</Button>
        </Form>
      </Container>
    </>
  );
};
export default Login;