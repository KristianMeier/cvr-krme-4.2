import { Link } from 'react-router-dom'
import { USER_HINT_PATH } from '../../Constants/Constants'

export const SearchNoResults = () => (
  <div className='search-no-results'>
    <h3 className='message-title'>No companies found</h3>
    <p>
      To see the companies in the database,&nbsp;
      <Link className='user-hint-link' to={USER_HINT_PATH}>
        Click here
      </Link>
    </p>
  </div>
)
