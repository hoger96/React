import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  //파라미터 읽어오는 함수
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img2'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>\{product?.price}</div>
          <div>{product?.choice}</div>
          <div>
            <select>
              <option>사이즈 선택</option>
              <option>{product?.size[0]}</option>
              <option>{product?.size[1]}</option>
              <option>{product?.size[2]}</option>
            </select>
          </div>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail