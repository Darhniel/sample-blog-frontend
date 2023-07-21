import { useState } from "react";
import{ Navigate } from "react-router-dom";

import Editor from "../Editor";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);
    const modules = {
        toolbar: [
            [{'header': [1, 2, 3, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    async function createNewPost(e) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        
        e.preventDefault();
        const response = await fetch("http://localhost:4000/post", {
            method: 'POST',
            body: data,
            credentials: "include"
        });

        if(response.ok) {
            setRedirect(true);
        }               
    };

    if(redirect) {
        return <Navigate to="/" />
    }

    return( 
        <form action="" onSubmit={createNewPost}>
            <input 
                type="title" placeholder="Title" value={title} 
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="summary" placeholder="Summary" value={summary}
                onChange={(event) => setSummary(event.target.value)}
            />
            <input 
                type="file" accept="image/*"
                onChange={(event) => setFiles(event.target.files)}
            />
            <Editor value={content} onChange={setContent}/>
            <button style={{marginTop: "0.7rem"}}>Create Post</button>
        </form>
    )
}