import React from 'react'
import { productData as data } from './data.js'
import {
	ProductsContainer, ProductsHeading, ProductsWrapper, ProductCard, ProductsInfo, ProductsImage,
	ProductsTitle, ProductsDescription, ProductsPrice, ProductsButton
} from './ProductsElements.js'

const Products = () => {
	return (
		<ProductsContainer>
			<ProductsHeading>Heading</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard>
							<ProductsImage></ProductsImage>
							<ProductsInfo>
								<ProductsTitle></ProductsTitle>
								<ProductsDescription></ProductsDescription>
								<ProductsPrice></ProductsPrice>
								<ProductsButton></ProductsButton>
							</ProductsInfo>
						</ProductCard>
					)
				})}
			</ProductsWrapper>
		</ProductsContainer>
	)
}

export default Products
