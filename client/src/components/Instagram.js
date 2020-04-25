import React from "react";
import Widget from "./Widget";
import InstagramEmbed from 'react-instagram-embed';


export default class Instagram extends React.Component {
  render() {
    return (
      <div>
        <Widget widgetTitle="Community">
        <InstagramEmbed
            url='https://www.instagram.com/p/B_ZV7P1J-E2/'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
        />
        <InstagramEmbed
            url='https://www.instagram.com/p/B_X81oin1jS/'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
        />
        <InstagramEmbed
            url='https://www.instagram.com/p/B_ZXjdNBjwK/'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
        />
        </Widget>
      </div>
    );
  }
}