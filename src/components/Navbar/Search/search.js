import React, { useEffect, useState } from "react";

export default function Search() {
    const [subreddit, setSubreddit] = useState([]);
    const [search, setSearch] = useState('webdev');

    useEffect(() => {
        fetch("https://www.reddit.com/r/webdev").then(res => {
            res.json().then(data => {
                if (data != null) {
                    console.log(data);
                    // setSubreddit(data.data.children)
                }
            });
        }); 

    }, [setSearch]);

}