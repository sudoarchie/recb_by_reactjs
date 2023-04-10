import logo from "./logo.svg";
import "./App.css";
import { list, Faculty } from "./constant";
import AboutRajkiya from "./components/about_rajkiya_components";
function App() {
  return (
    <div>
      <div className="heading">
        <img src="http://recb.ac.in/img/banner1.png" className="logo" />
      </div>
      <div id="nav">
        <ul className="nav">
          <li className="navelem">Home</li>
          <li className="navelem">
            Students
            <ul id="submenu">
              {list.map((info, index) => (
                <li className="submenuelem" key={index}>
                  <a href="#" className="navlinks">
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="navelem">
            Faculty
            <ul id="submenu">
              {Faculty.map((info, index) => (
                <li className="submenuelem" key={index}>
                  <a href="#" className="navlinks">
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="navelem">
            Staff
            <ul id="submenu">
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Staff Handbook
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Prospective Staff
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Current Staff
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Retired Staff
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Internal Pages
                </a>
              </li>
            </ul>
          </li>
          <li className="navelem">
            Media
            <ul id="submenu">
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Public Relation Office
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Social Media Policy
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  News Hub
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </li>
          <li className="navelem">
            Alumni
            <ul id="submenu">
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  RECB Alumni Office
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Alumni Association
                </a>
              </li>
            </ul>
          </li>
          <li className="navelem">
            Industry
            <ul id="submenu">
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  RECB Research Park
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  SINE
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Consultancy and Research
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Continuing Education
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Analytical Measurements
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Technology Transfer & Licensing
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Doner Relationship
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Placements at RECB
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Vendor's Corner
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Tenders
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  GST Registration Details
                </a>
              </li>
            </ul>
          </li>
          <li className="navelem">
            Resources
            <ul id="submenu">
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Institute Policies
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Faculties at RECB
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Donor Relation Programme
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  IoE
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Gender cell
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Emergency Contact
                </a>
              </li>
              <li className="submenuelem">
                <a href="#" className="navlinks">
                  Event Calender
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="image1">
        <h1 className="image1text">RECB</h1>
        <br />
        <h2 className="image1text">Rajkiya Engineering Collage Bijnor</h2>
      </div>
      <div className="mainarea">
        <AboutRajkiya
          heading="About Rajkiya Engineering College Bijnor"
          content="Rajkiya Engineering College Bijnor (Formerly Dr. Bhim Rao Ambedkar
                      Engineering College of Information Technology, Bijnor) was started
                      by Government of Uttar Pradesh, Department of Technical Education
                      under Special Component Plan (SCP), basically a Plan of the Union
                      Government of India for the promotion of technical education into
                      the socially and economically weaker section of the society. The
                      admission to this College started in the year 2010-2011 with three
                      branches Civil Engineering, Electrical Engineering and Information
                      Technology with an intake of 60 in each branch"
          button_text="Read more"
        />

        <div className="aside">
          <h1 className="aboutustext">Announcements</h1>
          <div className="asidelem">
            <ul className="asideul">
              <li className="asidelemli">
                <a href="#" className="asidelemlink">
                  UG New Entrants 2022-23{" "}
                </a>
              </li>
              <li className="asidelemli">
                <a href="#" className="asidelemlink">
                  {" "}
                  Inviting Nominations for IIT Bombay International Award 2023
                </a>
              </li>
              <li className="asidelemli">
                <a href="#" className="asidelemlink">
                  {" "}
                  India's G20 Presidency
                </a>
              </li>
              <li className="asidelemli">
                <a href="#" className="asidelemlink">
                  {" "}
                  GATE 2023
                </a>
              </li>
              <li className="asidelemli">
                <a href="#" className="asidelemlink">
                  {" "}
                  CEED 2023
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <AboutRajkiya
        heading=" "
        content="The institute is recognised worldwide as a leader in the field of
                    engineering education and research. Reputed for the outstanding
                    calibre of students graduating from its undergraduate and postgraduate
                    programmes, the institute attracts the best students from the country
                    for its bachelor's, master's and doctoral programmes. Research and
                    academic programmes at IIT Bombay are driven by an outstanding
                    faculty, many of whom are reputed for their research contributions
                    internationally. IIT Bombay also builds links with peer universities
                    and institutes, both at the national and the international levels, to
                    enhance research and enrich its educational programmes. The alumni
                    have distinguished themselves through their achievements in and
                    contributions to industry, academics, research, business, government
                    and social domains. The institute continues to work closely with the
                    alumni to enhance its activities through interactions in academic and
                    research programmes as well as to mobilise financial support. Over the
                    years, the institute has created a niche for its innovative short-term
                    courses through continuing education and distance education
                    programmes. Members of the faculty of the institute have won many
                    prestigious awards and recognitions, including the Shanti Swaroop
                    Bhatnagar and Padma awards. Located in Powai, one of the northern
                    suburbs of Mumbai, the residents of the institute reap the advantage
                    of being in the busy financial capital of India, while at the same
                    time enjoying the serenity of a campus known for its natural beauty. A
                    fully residential institute, all its students are accommodated in its
                    15 hostels with in-house dining; the campus also provides excellent
                    amenities for sports and other recreational facilities."
        button_text="Read more"
      />
    </div>
  );
}

export default App;
