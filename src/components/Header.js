import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log('in header')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
