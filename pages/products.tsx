import type { NextPage } from 'next'
import FilterBar from '../components/filterBar/filterBar';
import Layout from '../components/layout';

const Products: NextPage = () => {
  return (
    <Layout>
      <FilterBar/>
      <div>Products</div>
    </Layout>
  )
}
export default Products;