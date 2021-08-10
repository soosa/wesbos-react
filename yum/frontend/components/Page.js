import PropTypes from 'prop-types';
import Head from './Head';
export default function Page({ children }) {
  return (
    <div>
    <Head></Head>
      <h2>I am the Page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
