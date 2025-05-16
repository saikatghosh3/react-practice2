import React, { useState, useEffect } from 'react';

const UseEffect1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
     
      
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data ? (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}- <br />{post.body}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    

    

    </div>
  );
};

export default UseEffect1;
