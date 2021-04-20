import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('in header')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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
