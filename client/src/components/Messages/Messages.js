import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = () => (
    <ScrollToBottom>
        {Messages.map((message,i) => 
            <div key={i}>
                <Message />
            </div>
        )}
    </ScrollToBottom>
);


export default Messages;
