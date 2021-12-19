import styles from './index.less';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Users from './users'
export default function IndexPage() {
  return (
    <Router>
      <div>
        <h1 className={styles.title}>Page index</h1>
        <Link to="/users">users</Link>
        <Route path="/users" component={Users}></Route>
      </div>
    </Router>
  );
}
