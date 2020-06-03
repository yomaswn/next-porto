import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title='Error!!'>
    <p>
      {statusCode
        ? `Couldn't load data: Status Code ${statusCode}`
        : `Couldn't get that page, sorry!`}
    </p>
  </Layout>
);
