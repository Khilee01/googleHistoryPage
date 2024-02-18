import './App.css'
import {Component} from 'react'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    historyList: initialHistoryList,
    length: 9,
  }

  changeList = event => {
    const {historyList} = this.state
    const resultList = historyList.filter(eachHistory =>
      eachHistory.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )
    this.setState({
      historyList: resultList,
      length: resultList.length,
    })
  }

  deleteOnclick = uniqueNo => {
    const {historyList} = this.state
    const resultList = historyList.filter(
      eachHistory => eachHistory.id !== uniqueNo,
    )
    this.setState({
      historyList: resultList,
      length: resultList.length,
    })
  }

  renderList = () => {
    const {historyList, length} = this.state
    if (length !== 0) {
      return (
        <ul className="listContainer">
          {historyList.map(history => (
            <li key={history.id} className="history">
              <p className="time">{history.timeAccessed}</p>
              <img
                className="logo"
                key={history.logoUrl}
                src={history.logoUrl}
                alt="domain logo"
              />
              <p className="headingp">{history.title}</p>
              <p className="url">{history.domainUrl}</p>
              <button
                type="button"
                data-testid="delete"
                onClick={() => this.deleteOnclick(history.id)}
              >
                <img
                  className="delete"
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div className="blankPageContainer">
        <p>There is no history to show</p>
      </div>
    )
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="header">
          <img
            className="appLogo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="searchBar">
            <img
              className="searchImg"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              onChange={this.changeList}
              type="search"
              alt="search"
              placeholder="Search history"
              className="search"
            />
          </div>
        </div>
        {this.renderList()}
      </div>
    )
  }
}

export default App
