var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?city=Manila'>Manila, PH</Link>
        </li>
        <li>
          <Link to='/?city=Tarlac'>Tarlac, PH</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
