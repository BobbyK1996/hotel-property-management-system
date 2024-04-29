import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';

const TableRow = styled.div``;

const Img = styled.img``;

const Cabin = styled.div``;

const Price = styled.div``;

const Discount = styled.div``;

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button>Delete</button>
    </TableRow>
  );
}

export default CabinRow;
