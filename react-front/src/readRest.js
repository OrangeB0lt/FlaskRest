import React, {useEffect, useState} from 'react';
import axios from 'axios';

  

const MyComponent = () => {
    const [ messages, setMessages ] = useState([]);

    
    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get('http://localhost:5000');
                const { data } = response;
                
                if(data){
                    setMessages(data)
                }
                console.log(data)
                console.log(messages)
                console.debug(data);
                await new Promise(resolve => setTimeout(resolve, 2000))    
            }
            catch (e) {
                console.error(e);            
            }            
        })()
    })
    
    return <div className="App-body">
    <p>{messages.map(message => <div><p>{message.smessage}</p></div>)}</p>
</div>    
};


//.message.map(message => <p>{message.message}</p>)
/*
return <div className="App-body">
        {messages.map(message => <p>{message}</p>)}
    </div>    
    

*/
export default MyComponent;