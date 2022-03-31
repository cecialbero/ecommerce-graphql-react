import { useQuery } from '@apollo/client';
import { PRODUCTS } from './graphql/queries';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Container } from './styled-components/Grid';
import { Loading } from './styled-components/Loading';
import { Alert } from './styled-components/Alert';

function App() {
  const { loading, error, data } = useQuery(PRODUCTS)

  return (
    <>
      <Header></Header>
      <Container>
        {loading
          ? <Loading>Loading data...</Loading>
          : <ProductList {...data}></ProductList>
        }
        {
          error && <Alert error>Ups, looks like there is an error</Alert>
        }
      </Container>
    </>
  );
}

export default App;
