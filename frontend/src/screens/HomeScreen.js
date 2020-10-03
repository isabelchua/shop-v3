import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
//import axios from "axios";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
	//const [products, setProducts] = useState([]);
	const dispatch = useDispatch();

	const productList = useSelector(state => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
		// const fetchProducts = async () => {
		// 	const { data } = await axios.get("/api/products");

		// 	setProducts(data);
		// };
		// fetchProducts();
	}, [dispatch]);

	//const products = [];

	return (
		<div>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products.map(product => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<h3>{product.name}</h3>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default HomeScreen;
