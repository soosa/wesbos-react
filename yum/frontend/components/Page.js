import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I am the Page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
