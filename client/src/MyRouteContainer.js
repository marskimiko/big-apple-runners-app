import React, { useEffect } from 'react';
import MyRouteCard from "./MyRouteCard";
function MyRouteContainer({currentUser}){
    
  useEffect(() => {
    console.log("Use effect called");
    console.log(currentUser.routes);
  }, [currentUser])

  // console.log('my route container',currentUser.routes)

  // function checkUser() {
  //   if (currentUser) {
  //     return (
  //       <div className="routes">
  //         {currentUser.routes.map((route) => {
  //         return (
  //           <div className="container">
  //             <MyRouteCard key={route.id} route={route} />
  //           </div>
  //         )
  //       })}
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // }

  // return(checkUser())  
    return (
      <div className="routes">
        {currentUser.routes.length>0?currentUser.routes.map((route) => {
        return (
          <div className="container" key={route.id}>
            <MyRouteCard key={route.id} route={route} />
          </div>
        )
      }):null}
      </div>
    )
}

export default MyRouteContainer

