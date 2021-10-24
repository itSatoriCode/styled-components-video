import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin:0;
		padding: 0;
		box-sizing: border-box;
	}
`;

export const Container = styled.div`
	min-width: 100%;
	padding: 0 50px;
	margin: 0px;
`;

export const Header = styled.h1`
	text-align: center;
	color: ${({ theme }) => (theme.color ? theme.color : 'red')};
	font-size: ${({ size }) => (size ? size : '3rem')};
`;

const DEFAULT_DIV = styled.div`
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	background-color: ${({ background }) => (background ? background : '')};
`;

export const Row = styled(DEFAULT_DIV)`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	width: 100%;
`;

export const Column = styled(DEFAULT_DIV)`
	display: flex;
	flex-flow: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	height: 100px;
	width: 100px;
	color: red;
`;

export default GlobalStyle;
