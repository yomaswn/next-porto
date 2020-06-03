import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci
      in saepe et unde dignissimos quibusdam. Iste corrupti repudiandae
      quibusdam, est voluptatum odit molestiae pariatur dolorum aperiam, harum
      nam incidunt!
    </p>
  </Layout>
);

export default withRouter(Post);
