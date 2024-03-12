import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

const Navbar = () => {
const [collapsed, setCollapsed] = useRecoilState(collapsedState)

const toggleNavbar = () => {
setCollapsed(!collapsed)
}

React.useEffect(() => {
let elementId = document.getElementById("navbar")
document.addEventListener("scroll", () => {
if (window.scrollY > 170) {
elementId.classList.add("is-sticky")
} else {
elementId.classList.remove("is-sticky")
}
})
})

const classOne = collapsed
? "collapse navbar-collapse"
: "collapse navbar-collapse show"
const classTwo = collapsed
? "navbar-toggler navbar-toggler-right collapsed"
: "navbar-toggler navbar-toggler-right"

return (
<>
  <div id="navbar" className="navbar-area">
    <div className="rewy-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" onClick={()=> setCollapsed(true)}
          className="navbar-brand"
          >
          <img src={logo} alt="logo" />
          </Link>

          <button onClick={toggleNavbar} className={classTwo} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/*<li className="nav-item">
                <Link to="/" onClick={e=> e.preventDefault()}
                className="nav-link"
                >
                Home {/*<i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    IT Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/seo-agency" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    SEO Agency
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/data-science-ml-company" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Data Science ML Company
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/data-analytics-ai-startup" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Data Analytics & AI Startup
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/digital-marketing-agency" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Digital Marketing Agency
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/data-science-online-courses" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Data Science Online Courses
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/big-data-analysis-startup" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Big Data Analysis Startup
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/data-analytics-ml-consulting" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Data Analytics ML Consulting
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/machine-learning-ai-solutions" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Machine Learning AI Solutions
                    </Link>
                  </li>
                </ul>
              </li>*/}

              <li className="nav-item">
                <Link to="#" onClick={e=> e.preventDefault()}
                className="nav-link"
                >
                About Me <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/about-us" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Resume" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Resume
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/history" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    History
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Mission" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Mission
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about-us/LinkedIn" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Recommendations
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="#" onClick={e=> e.preventDefault()}
                className="nav-link"
                >
                Projects <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/CompletedProjects" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Completed
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Projects/ComingSoon" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Ongoing
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="#" onClick={e=> e.preventDefault()}
                className="nav-link"
                >
                Info Hub <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">

                  <li className="nav-item">
                    <Link to="#" onClick={e=> e.preventDefault()}
                    className="nav-link"
                    >
                    Documentation <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/Projects/ComingSoon" activeClassName="active" onClick={()=> setCollapsed(true)}
                        className="nav-link"
                        >
                        SOPs
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Projects/ComingSoon" activeClassName="active" onClick={()=> setCollapsed(true)}
                        className="nav-link"
                        >
                        Articles
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/blog/Blog" activeClassName="active" onClick={()=> setCollapsed(true)}
                        className="nav-link"
                        >
                        Blog
                        </Link>
                      </li>
                    </ul>
                  </li>



                  <li className="nav-item">
                    <Link to="#" onClick={e=> e.preventDefault()}
                    className="nav-link"
                    >
                    Modules <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/Projects/ComingSoon" //Resources/Modules/Modules" activeClassName="active" onClick={()=> setCollapsed(true)}
                        className="nav-link"
                        >
                        Training Modules
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Projects/ComingSoon" //courses/course-details" activeClassName="active" onClick={()=> setCollapsed(true)}
                        className="nav-link"
                        >
                        Video Tutorials
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/Resources/UpcomingFeatures" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Upcoming Features
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="#" onClick={e=> e.preventDefault()}
                className="nav-link"
                >
                Resources <i className="bx bx-chevron-down"></i>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link to="/Resources/Documentation/FAQ" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    FAQ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Resources/contact" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/privacy-policy" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Privacy Policy
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/terms-of-service" activeClassName="active" onClick={()=> setCollapsed(true)}
                    className="nav-link"
                    >
                    Terms of Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</>
)
}

export default Navbar
