// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-main">
            {showLeftNavbar ? (
              <div className="left">
                <h1 className="left-head">left Navbar Menu</h1>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
              </div>
            ) : (
              <></>
            )}

            {showContent ? (
              <div className="center">
                <h1 className="left-head">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam rutrum lectus diam, sed malesuada diam feugiat a.
                  Phasellus auctor dapibus nisi nec laoreet. Aliquam tempor
                  blandit diam, et auctor enim pellentesque a. Vivamus facilisis
                  porttitor arcu, sit amet fringilla elit vulputate sed. Proin
                  et est nec sapien malesuada eleifend ac sit amet nibh.
                </p>
              </div>
            ) : (
              <></>
            )}
            {showRightNavbar ? (
              <div className="right">
                <h1 className="left-head">Right Navbar</h1>
                <div className="box1">
                  <p>Ad 1</p>
                </div>
                <div className="box1">
                  <p>Ad 2</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
