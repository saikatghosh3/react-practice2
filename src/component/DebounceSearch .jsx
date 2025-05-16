import React, {useState, useEffect} from 'react';

function DebounceSearch (){
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setResult(text);
        }, 500);
        return ()=> clearTimeout(timer);
    },[text]);

     return (
        <div>
        <input type="text"
        placeholder='Type something....'
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className='border p2 rounded'
        
        />
        <p className='mt-2'>You typed: {result}</p>
        
        
        
        </div>
     )

}

export default DebounceSearch;