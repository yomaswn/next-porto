import React, { Component } from 'react';
import Layout from '../components/Layout';
import Error from './_error';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { withRouter } from 'next/router';

export class about extends Component {
  state = {
    user: '',
  };
  static async getInitialProps(router) {
    const res = await fetch(
      `https://api.github.com/users/${router.query.username}`
    );
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title='About'>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt='avatar_user' height='200px' />
        {/* <input type='text' onChange={this.setUser} />
        <Link href={`/about?username=${this.state.user}`}>
          <a>submit</a>
        </Link> */}
      </Layout>
    );
  }

  setUser = (e) => {
    this.setState({ user: e.target.value });
  };
}

export default withRouter(about);
