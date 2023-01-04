//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/board/Detail';
import Home from './pages/board/Home';
import SaveForm from './pages/board/SaveForm';
import UpdateForm from './pages/board/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';

function App() {
  /*const [posts, setPosts] = useState([]);
  //웹에서 서버로 요청 --> 나 리스트 전달해줘 
  const getPosts = () =>{
    axios
    .get('http://localhost:8081/api/board')  //axios를 통해 HTTP요청을 보내는 코드
    .then((response)=>{ //then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있다
      setPosts(response.data); // 이전에 useState으로 생성했던 setPosts함수를 통해 data를 posts에 저장합니다.
    })
  }
  useEffect(getPosts, []);
  return (
    <List items={posts}/>
  );
  */
 return(
  <>
  <div>
  <Header />
        <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/saveForm" exact={true} element={<SaveForm/>}/>
          <Route path="/board/:id" exact={true} element={<Detail/>}/>
          <Route path="/loginForm" exact={true} element={<LoginForm/>}/>
          <Route path="/joinForm" exact={true} element={<JoinForm/>}/>
          <Route path="/updateForm/:id" exact={true} element={<UpdateForm/>}/>
          </Routes>
        </Container>
  </div>
  </>
 );
}
export default App;

