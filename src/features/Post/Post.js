import React, { useState, useEffect } from "react";

export default function Post() {
    const [post, setPost] = useState([]);
    const [searchResults, setSearchResults] = useState('Popular')
    
    useEffect(() => {
        fetch("https://www.reddit.com/r/" + searchResults + ".json").then(res => {
            
            res.json().then(data => {
                if (data !== null) {
                  console.log(data);
                  setPost(data.data.children);
                }
              });
        })
    }, [searchResults]);

    return (
        <div className="Post">
            {
                (post !== null) ? post.map((post, index) => <Post key={index} post={post.data} />) : ''
            }
        </div>
    )
}