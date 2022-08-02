import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'

const Home: NextPageWithLayout = () => {
  return (
    <div>Hello World</div>
  )
}

Home.getLayout = function getLayout(page: ReactElement): any {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
