import React, { Component } from 'react';
import './ChatbotButton.css';
import Logo from '../../../img/chatbotTwo.png';
import { Button, Icon } from 'semantic-ui-react';
class ChatbotButton extends Component {
    constructor(props) {
        super(props);
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
        this.state={
            scrollState:false,
            backToTopButton:false
        }
    }
    backToTopEvent(){
        console.log("Back To Top Now Bro");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    chatbotOpenEvent(){
        console.log("Chatbot Open");
    }
    listenScrollEvent(event) {
      var scrollPosition=window.scrollY;
      console.log("Now Scroll Position: "+scrollPosition);
      console.log("Previous Scroll Position: "+this.prevScrollPosition)
      if(scrollPosition>300 && scrollPosition>this.prevScrollPosition)
      {
        this.setState({
            scrollState:true,
            backToTopButton:false
        });    
      }
      else if(scrollPosition>300 && scrollPosition<this.prevScrollPosition)
      {
        this.setState({
            scrollState:false,
            backToTopButton:true
        });
      }
      else
      {
        this.setState({
            scrollState:false,
            backToTopButton:false
        });
      }
      this.prevScrollPosition = window.scrollY;
    }
    componentDidMount() {
        this.prevScrollPosition = window.scrollY;
        window.addEventListener('scroll', e=>this.listenScrollEvent(e));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
    }
    render() {
        return (
            <div onScroll={this.listenScrollEvent}>
                <img src={Logo} 
                alt="Chatbot" 
                onClick={this.chatbotOpenEvent}
                className={this.state.scrollState ? "chatbotButton" :"chatbotButton chatbotButtonHidden"} />
                <div
                className={
                    this.state.backToTopButton ? "backToTopChat" :"backToTopChat backToTopChatHidden"
                }
                >
                <Button 
                size="tiny" 
                color="violet"
                icon
                labelPosition='right'
                onClick={this.backToTopEvent}>
                    Back To Top
                    <Icon name='angle up' />
                </Button>
                </div>
            </div>
        );
    }
}

export default ChatbotButton;