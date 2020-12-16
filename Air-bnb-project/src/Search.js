import React,{useState} from 'react'
import './Search.css'
import {DateRangePicker} from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"

// Date picker component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }

    return (
        <div className="Search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number"
            />
            <Button
            onClick={()=>history.push('/search')}
            >Search Airbnb</Button>
        </div>
    )
}

export default Search;



// npm i react-date-range
// npm i date-fns