import React, { useEffect } from 'react';
import MyRouteCard from "./MyRouteCard";
import {useParams } from 'react-router-dom'
function MyRouteContainer({currentUser}){
  
  console.log('my route container', currentUser.routes)
  
  useEffect(() => {
  }, [currentUser.routes])
  
  
    return (
      <div className="routes">
        {currentUser.routes.map((route) => {
        return (
          <div className="container">
            <MyRouteCard key={route.id} route={route} />
          </div>
        )
      })}
      </div>
    )
}

export default MyRouteContainer

