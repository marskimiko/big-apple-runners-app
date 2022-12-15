import RouteCard from './RouteCard'

function RouteContainer({ routes }) {

  return (
    <div className="routes">
      {routes.map((route) => {
        return (
          <div className="container">
            <RouteCard key={route.id} route={route} />
          </div>
        )
      })}
    </div>
  )
}

export default RouteContainer
