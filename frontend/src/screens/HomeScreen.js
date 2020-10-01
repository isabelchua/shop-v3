import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} lg={4}>
						<h3>{product.name}</h3>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
