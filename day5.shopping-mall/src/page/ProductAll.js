import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        //q라고 시작되는 것의 아이템을 searchQuery에 넣기
        let searchQuery = query.get("q") || "";
        console.log("쿼리값은? ",searchQuery);
        let url = `http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json()
        setProductList(data);
    }

    //render 후에 딱 한번 실행이 됨 => query 값이 바뀔 때 마다 다시 실행하기
    useEffect(() => {
        getProducts();
    }, [query]);

  return (
    <div>
        <Container>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3}>
                        <ProductCard item={menu}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll