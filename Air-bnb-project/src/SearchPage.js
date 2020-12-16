import React from 'react'
import './SearchPage.css'
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage_info">
                <p>62 stays · 16 december to 31 december · 
                2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation 
                  Flexibility
                </Button>
                <Button variant='outlined'>
                Type of place
                </Button>
                <Button variant='outlined'> 
                  price
                </Button>
                <Button variant='outlined'> 
                  Rooms and beds
                </Button>
                <Button variant='outlined'> 
                  More Filters
                </Button>
            </div>
            <SearchResult
             img="https://a0.muscache.com/im/pictures/3ce55fa5-af90-4bd9-ad5a-f1977b65d77b.jpg?im_w=1200"
             location="Sedona, Arizona, United States"
             title="Tree House Living in Sedona"
             description="Entire flat hosted by Alex
                5 guests · Studio · 3 beds · 1.5 bathrooms"
             star={5}
             price="$210/night"
             total="$12000 total"
             />
              <SearchResult
             img="https://a0.muscache.com/im/pictures/79e8a3a0-0445-4db1-9e61-402150ebf21c.jpg?im_w=1200"
             location="Chattanooga, Tennessee, United States"
             title="Covid 19 Safe Cozy penthouse in the heart of city"
             description="4 guests · 2 bedrooms · 3 beds · 2 bathrooms"
             star={4.86}
             price="$120/night"
             total="$900 total"
             />
             <SearchResult
             img="https://a0.muscache.com/im/pictures/1e752838-2e4c-4f34-9747-37fb7be511b7.jpg?im_w=960"
             location="Moskva, Russia"
             title="Однокомнатная квартира м Динамо/Петровский парк"
             description="Entire flat hosted by Светлана
              4 guests · 1 bedroom · 2 beds · 1 bathroom"
             star={5}
             price="$1574/night"
             total="$1100 total"
             />
              <SearchResult
             img="https://a0.muscache.com/im/pictures/2d62a722-9514-4910-9229-e23a5b59f62b.jpg?im_w=960"
             location="Moskva, Russia"
             title="Однокомнатная квартира м Динамо/Петровский парк"
             description="Entire loft hosted by Алексей
                3 guests · 1 bedroom · 2 beds · 1 bathroom"
             star={5}
             price="$763/night"
             total="$8500 total"
             />
        </div>
    )
}

export default SearchPage
