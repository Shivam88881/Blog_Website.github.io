import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';
import './Homepage.css'


export default function Homepage() {
  const [data,setData]=useState([]);
  useEffect(()=>{
      axios.get('https://dummyapi.io/data/v1/post?limit=30', {'headers': {'app-id': '6363f7c2cf8f4ef7fb62322f'}}).then((res)=>{
        setData(res.data.data)
      })
  },[]);


  return (
    <div style={{alignItems:'center'}}>
      <div className='home-section'> 
      {console.log(data)}
      {
        data!=null ?<div className='post-detail'>

        {data.map((obj)=>(
            <div className="card">
              <div className='owner-detail' style={{display:'flex'}}>
              <img src={obj.owner.picture} alt="..." className="rounded-circle owner-pic" />
              <p><strong>{obj.owner.title} {obj.owner.firstName} {obj.owner.lastName}</strong></p>
                
              </div>
             <div className='card-details'> 
            <img src={obj.image} className="card_image" alt="image"/>
            <div className="card-content">
              <div>{obj.text}</div>
              <strong>Likes: {obj.likes}</strong>
              <p><strong>Published date: </strong> {obj.publishDate}</p>
              
            </div>
            </div>
            <div className='tags' style={{display:'flex'}}>
              <strong>Tag: </strong>
              <div className='all-tags'>
              {
                obj.tags.map((obj1)=>(
                  <strong style={{color:'Highlight'}}>{obj1} &nbsp;</strong>
                ))
              }
              </div>
            </div>
            
          </div>

        ))
      }
        
        </div>:<div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
      }
        

      </div>
    </div>
  )
}
