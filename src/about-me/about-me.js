import React from "react";
import "./about-me.scss";
import PersonalPhoto from "../assets/images/Matthew_Muenzberg.jpg";
import ClevelandPhoto from "../assets/images/cleveland-photo.jpg";
import BiscuitPhoto from "../assets/images/Biscuit.jpg";
import AboutMeContentJSON from "../assets/data/about-me-content.json";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.constructPhotoMap();
    this.constructContentMap();
  }

  constructContentMap() {
    this.contentMap = new Map();
    AboutMeContentJSON.forEach((contentObj) => {
      this.contentMap.set(contentObj.sectionName, contentObj);
    });
  }

  constructPhotoMap() {
    this.photoMap = new Map();
    this.photoMap.set("PersonalPhoto", PersonalPhoto);
    this.photoMap.set("ClevelandPhoto", ClevelandPhoto);
    this.photoMap.set("BiscuitPhoto", BiscuitPhoto);
  }

  getAboutMeSectionFormatting(section) {
    switch (section.pictureSide) {
      case 'left':
        return <React.Fragment>
          <div className="col-lg-3 text-center align-self-center">
            <img className="round-pic" src={this.photoMap.get(section.pictureKey)}></img>
          </div>
          <div className="col-lg-9 text-center p-2 align-self-center about-me-item_text">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </React.Fragment>;
      case 'center':
        return <React.Fragment>
          <div className="text-center align-self-center  m-auto">
            <img className="round-pic" src={this.photoMap.get(section.pictureKey)}></img>
          </div>
          <div className="text-center p-2 align-self-center about-me-item_text">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </React.Fragment>;
      case 'bottom':
        return <React.Fragment>
          <div className="col-lg-9 text-center p-2 align-self-center about-me-item_text">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="col-lg-3 text-center align-self-center">
            <img src={this.photoMap.get(section.pictureKey)}></img>
          </div>
        </React.Fragment>;
      default:
        return <div></div>;
    }
  }

  render() {
    return (
      <div id="about-me" class="col-md-6 m-auto">
        {Array.from(this.contentMap.values()).map((section) => (
          <div className="row pt-5 about-me-item" key={section.sectionName}>
            {this.getAboutMeSectionFormatting(section)}
          </div>
        ))}
      </div>
    );
  }
}

export default AboutMe;
