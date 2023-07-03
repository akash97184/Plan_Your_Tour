import Card from './Card';

function Tours ({tours,removeTour, addTour}) {
    return (
        <div className="container">
            <div>
                <h2 className = "title">Plan Your Tour </h2>
            </div>
            <div className = "cards">
                {
                    tours.map( (tour) => {
                        //Just passing the copy of  object as {...tour} & removeTour Function for handling not interested btn work.
                        return <Card {...tour} key={tour.id} removeTour={removeTour} addTour={addTour}></Card>
                    } ) 
                }
            </div>
        </div>
    )
}


export default Tours;