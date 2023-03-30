import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const config = {
    width: "400px",
    height: "500px",
    floating: true,
};

class Chatbot extends Component {
    render() {
        return (
            <ChatBot
                steps={[
                    {
                        id: '1',
                        message: 'Hi there! What is your name?',
                        trigger: 'name',
                      },
                      {
                        id: 'name',
                        user: true,
                        trigger: '3',
                      },
                      {
                        id: '3',
                        message: 'Hello {previousValue}! What is your gender?',
                        trigger: 'gender',
                      },
                      {
                        id: 'gender',
                        options: [
                          { value: 'male', label: 'Male', trigger: '5' },
                          { value: 'female', label: 'Female', trigger: '5' },
                        ],
                      },
                      {
                        id: '5',
                        message: 'How old are you?',
                        trigger: 'age',
                      },
                      {
                        id: 'age',
                        user: true,
                        validator: (value) => {
                          if (isNaN(value)) {
                            return 'value must be a number';
                          } else if (value < 0) {
                            return 'value must be positive';
                          } else if (value > 120) {
                            return `${value}? Come on!`;
                          }
            
                          return true;
                        },
                        trigger: 'end-message' ,
                      },
                      {
                        id: 'end-message',
                        message: 'Thanks! Your data was submitted successfully!',
                        end: true,
                      },
                ]}
                {...config}
            />
        );
    }

}

export default Chatbot;