import GlobalStyle, { Column, Container, Header, Row } from './globalStyles';
import { ThemeProvider } from 'styled-components';

const theme = { color: 'purple', size: '43px' };

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<Header>itSatori</Header>
				<Row background="blue" justify="center">
					<Column margin="4rem" background="green"></Column>
					<Column margin="4rem" background="yellow"></Column>
				</Row>
			</Container>
		</ThemeProvider>
	);
}

export default App;
