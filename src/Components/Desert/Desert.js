import React from 'react';
import {
	ProductCard, ProductsButton, ProductsContainer, ProductsDescription,
	ProductsHeading, ProductsImage, ProductsInfo, ProductsPrice,
	ProductsTitle, ProductsWrapper
} from "./../Products/ProductsElements";

const Desert = ({ heading, data }) => {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductCard>
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
	);
};

export default Desert;