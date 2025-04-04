import { Input,Button } from "../../../styles/Styles";
import { useState ,useContext} from "react";
import  axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const ChangePassword = () => {

  const {auth} = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = () => {
    axios.put('http://localhost/members',{
      currentPassword,
      newPassword
    },{
      headers:{
        Authorization : `Bearer ${auth.accessToken}`
      }
    }).then(() => {
      alert('비밀번호 변경에 성공하였습니다~')
      window.location.href = "/"
    }).catch(error => {
      setError(error.response.data['error-message'] || "비밀번호 변경 중 오류발생")
    })
  }

  return (
    <>
      <Input type="password" placeholder="현재 비밀번호를 입력해주세요." 
        onChange={(e) => setCurrentPassword(e.target.value)}
      required />
      <Input
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        placeholder="변경할 비밀번호를 입력해주세요."
        required
      />
      <label>{error}</label>
      <Button type="button" onClick={handleUpdatePassword} style={{backgroundColor:"skyblue"}}>비밀번호 변경하기</Button>
    </>
  );
};
export default ChangePassword;