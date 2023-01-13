import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from "react-redux";

function ContactForm() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    //액션을 던져주는 함수
    const dispatch = useDispatch();

    const addContact = (event) => {
        //새로고침 막기
        event.preventDefault();
        //값들을 store로 보내기
        //type: 액션이름 payload:매개변수
        //키값이랑 이름이 같으면 줄일 수 있음 {name, phoneNumber}
        //액션이 던져지면 reducer로 이동
        dispatch({type:"ADD_CONTACT", payload:{name:name, phoneNumber:phoneNumber}})
    }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control 
            onChange={(event) => {
                setName(event.target.value)
            }} 
            type="text" 
            placeholder="이름을 입력해주세요" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control 
            onChange={(event) => {
                setPhoneNumber(event.target.value);
            }} 
            type="number" 
            placeholder="전화번호를 입력해주세요" 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default ContactForm;