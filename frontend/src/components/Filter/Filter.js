import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            type="text"
            placeholder="Filter by Title"
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            type="text"
            placeholder="Filter by Author"
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
            <label>
            <input type='checkbox' checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange}/>
            Only Favorite
            </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
