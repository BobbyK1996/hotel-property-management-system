import styled from 'styled-components';

import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const FormRow = styled.div``;

const Label = styled.label``;

function CreateCabinForm() {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" />
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Input type="text" id="description" defaultValue="" />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <Input type="image" id="image" />
      </FormRow>

      <FormRow>
        <Button>Cancel</Button>
        <Button>Edit Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
