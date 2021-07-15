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
                    setMessages(data);
                }
                console.log(data)
                console.debug(data);    
            }
            catch (e) {
                console.error(e);            
            }            
        })()
    })
    
    return <div>
        <p>{JSON.stringify(messages.message)}</p>
    </div>    
};

/*
return <div>
        {messages.map(message => <p>{message}</p>)}
    </div>   
*/
export default MyComponent;