// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const changingContent = () => {
            onToggleShowContent()
          }
          const changingLeft = () => {
            onToggleShowLeftNavbar()
          }
          const changingRight = () => {
            onToggleShowRightNavbar()
          }
          return (
            <div className="navbar">
              <h1 className="navbar-head">LayOut</h1>
              <div className="navbar-check">
                <div className="checkbox-div">
                  <input
                    onChange={changingContent}
                    id="content"
                    checked={showContent}
                    type="checkbox"
                  />
                  <label htmlFor="content">Content</label>
                </div>
                <div className="checkbox-div">
                  <input
                    id="left"
                    checked={showLeftNavbar}
                    type="checkbox"
                    onChange={changingLeft}
                  />
                  <label htmlFor="left">Left Navbar</label>
                </div>
                <div className="checkbox-div">
                  <input
                    id="right"
                    checked={showRightNavbar}
                    type="checkbox"
                    onChange={changingRight}
                  />
                  <label htmlFor="right">Right Navbar</label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController
