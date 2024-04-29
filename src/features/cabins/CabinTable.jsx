import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { getCabins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';

const Table = styled.div``;

const TableHeader = styled.header``;

function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ['cabin'], queryFn: getCabins });

  if (isLoading) return <Spinner />;

  return <div>Table</div>;
}

export default CabinTable;
