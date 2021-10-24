import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding:0;
    margin:0;
  }
`;

export const Container = styled.div`
	min-width: 1048px;
	background-color: ${({ theme }) => (theme.color ? theme.color : 'blue')};

	> h1,
	div {
		color: ${({ color }) => (color ? color : 'blue')};
	}
`;

export const ContainerTwo = styled(Container)`
	background-color: green;
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
`;

export const Column = styled(DEFAULT_DIV)`
	display: flex;
	flex-flow: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
`;

export const ColumnTwo = styled(Column)`
	@media screen and (max-width: 960px) {
		background-color: red;
	}
`;

export default GlobalStyles;
