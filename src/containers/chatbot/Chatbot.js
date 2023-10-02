import React, { Component } from "react";

class Chatbot extends Component {
  componentDidMount() {
    window.embeddedChatbotConfig = {
      chatbotId: "JcQVRWop9RazUZMfoz_do",
      domain: "www.chatbase.co",
    };

    // Load the chatbot script asynchronously
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.chatbotId = "JcQVRWop9RazUZMfoz_do";
    script.domain = "www.chatbase.co";
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    // You can add a placeholder or any other content here
    return <div className="chatbot-container"></div>;
  }
}

export default Chatbot;