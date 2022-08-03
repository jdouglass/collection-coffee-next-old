import FilterBar from '../components/filterBar/filterBar';
import Layout from '../components/layout';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Collection: NextPageWithLayout = () => {
  return (
    <>
      <FilterBar/>
      <div>Collection</div>
    </>
  )
}

Collection.getLayout = function getLayout(page: ReactElement): any {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Collection;