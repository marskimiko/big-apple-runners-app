import RouteCard from './RouteCard'



function RouteContainer({ routes, onQuery }) {

  return (
    <div classname="routes">
      {routes.map((route) => {
        return (
          <div>
            <RouteCard key={route.id} route={route} />
          </div>
        )
      })}
    </div>
  )
}

export default RouteContainer
