import GlobalStyles, { Column, ColumnTwo, Container, ContainerTwo, Row } from './globalStyles';
import { ThemeProvider } from 'styled-components';

const theme = { color: 'gray' };

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Row justify="center" height="500px" width="1000px">
					<Column height="500px" width="100px" background="blue"></Column>
					<ColumnTwo height="500px" width="100px" background="green"></ColumnTwo>
				</Row>
			</Container>
		</ThemeProvider>
	);
}

export default App;
