import React, { useEffect, useState } from 'react'
import { instance } from '../api/axios'
import useAsync from '../hooks/useAsync'

function Example() {
  
  // const getPosts = async () => {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //   console.log(response.data)
    // }
    
    // const [ post, setPost ] = useState({ title: '', body: '' })
    // const [userInput, setUserInput] = useState({ title: '', body: '' })
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)
    
    //const [posts, setPosts] = useState([])
    
  const getPosts = async () => {
    const response = await instance.get('/posts')
    return response.data
  }
  const { isLoading, data, error } = useAsync(getPosts)
  
    // const setPostsByResponse = async () => {
    //     const data = await getPosts()
    //     setPosts(data)
    // }
    
    // const onChange = (e) => {
      //   const { name, value } = e.target
      //   setUserInput({...userInput, [name]: value})
      // }
      
      // const createPost = async () => {
        //   const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, userInput)
        //   return response.data
        // }
        
        // const deletePost = async (id) => {
          //   const responese = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          //   return responese.data
          // }
          
          // const getPost = async (id) => {
            //   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            //   return response.data
            // }
            
            // const setPostByResponse = async (id) => {
              //   const data = await getPost(id)
              //   setPost(data)
              // }
              
              // const createPost = async (post) => {
                //   const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
                //   console.log(response.data)
                // }
                
                // const updatePost = async (post, id) => {
                  //   const responese = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
                  //   console.log(responese.data)
                  // }
                  
                  // const deletePost = async (id) => {
                    //   const responese = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    //   console.log(responese.data)
                    // }
                    
                    // useEffect(() => {
                      //   setPostsByResponse()
                      //   setIsLoading(false)
                      //   // post -> 빈값
                      //   // getPosts(1)
                      //   // getPost(10)
                      //   // createPost({title: '제목', body: '내용'})
                      // },[])
                      
                      //if (isLoading) return <div>Loading...</div>
                      
  return (
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>  
          ))}
        </div>
  )
}

export default Example