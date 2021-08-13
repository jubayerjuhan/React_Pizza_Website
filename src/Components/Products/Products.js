import React from 'react'
import {
	ProductsContainer, ProductsHeading, ProductsWrapper, ProductCard, ProductsInfo, ProductsImage,
	ProductsTitle, ProductsDescription, ProductsPrice, ProductsButton
} from './ProductsElements.js'

const Products = ({ heading, data }) => {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard key={index}>
							<ProductsImage src={product.img} alt="" />
							<ProductsInfo>
								<ProductsTitle>{product.name}</ProductsTitle>
								<ProductsDescription>{product.desc}</ProductsDescription>
								<ProductsPrice>{product.price}</ProductsPrice>
								<ProductsButton>{product.button}</ProductsButton>
							</ProductsInfo>
						</ProductCard>
					)
				})}
			</ProductsWrapper>
		</ProductsContainer>
	)
}

export default Products
