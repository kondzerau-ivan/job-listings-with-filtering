import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/positions-selectors';
import { addFilter } from 'store/filters/filters-actions';

const JobList = () => {
    const positions = useSelector(selectAllPositions);
    const dispatch = useDispatch();
    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};