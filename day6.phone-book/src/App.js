import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
//1. 왼쪽에는 연락처 등록하는 폼, 오른쪽엔 리스트와 search창
//2. 리스트에는 유저이름과 연락처 추가가능
//3. 리스트에 아이템이 몇개 있는지 보임
//4. 사용자가 유저를 이름검색으로 찾을 수 있음

function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
