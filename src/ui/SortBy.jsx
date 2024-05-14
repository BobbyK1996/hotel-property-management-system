import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    // setSearchParams({ ...searchParams, sortBy: e.target.value });
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} type="white" onChange={handleChange} />;
}

export default SortBy;
