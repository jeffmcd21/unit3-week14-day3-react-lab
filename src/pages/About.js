
import { useLoaderData } from "react-router-dom";

function About(props) {

  const about = useLoaderData()

  return (
  <div className="about-container">
    <div className="about-main">
          <h2 className="about-name">{about.name}</h2>
          <h3>{about.email}</h3>
          <p>{about.bio}</p>
    </div>
    <div className="about-sidebar">
          <div className="about-image">
          <img src={about.headshot} alt={about.name}/>
          </div>
    </div>
  </div>
  )
}

export default About;
