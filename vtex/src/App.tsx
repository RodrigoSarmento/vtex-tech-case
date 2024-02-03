import React from 'react';
import FormGroup from './components/FormGroup';
import Label from './components/Label';
import Input from './components/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Container, Form, FormError, Logo, SaveButton } from './styles';
import TextArea from './components/TextArea';
import { useTicket } from './hooks';
import { useMutation, useQuery } from 'react-query';
import { useToast } from './contexts/Toast';

function App() {
  const { createTicket } = useTicket();
  const { addToast } = useToast();

  const onCreateTicket = useMutation(
    async (ticketBody: ITicketData) => await createTicket(ticketBody),
    {
      onError: () => {
        addToast('Error sending ticket');
      },
      onSuccess: () => {
        addToast('Success sending ticket');
      },
    }
  );

  const validationSchema = yup.object({
    accountName: yup.string().required('required'),
    email: yup.string().email('e-mail invalid').required('required'),
    subject: yup.string().required('required'),
    detailing: yup.string().required('required'),
  });

  const formik = useFormik({
    initialValues: {
      accountName: '',
      email: '',
      subject: '',
      detailing: '',
    },
    onSubmit: () => {},
    validationSchema,
  });

  return (
    <Container>
      <Logo src="./vtexlogo.webp" />
      <Form>
        <FormGroup>
          <Label>Account Name</Label>
          <Input
            type="text"
            placeholder="Account Name"
            name={'accountName'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.accountName}
          />
          {formik.touched.accountName && formik.errors.accountName && (
            <FormError>{formik.errors.accountName}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            placeholder="E-mail"
            name={'email'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <FormError>{formik.errors.email}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Subject</Label>
          <Input
            type="text"
            placeholder="Subject"
            name={'subject'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject && (
            <FormError>{formik.errors.subject}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Detailing</Label>
          <TextArea
            placeholder="Detailing"
            name={'detailing'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.detailing}
            rows={5}
          />
          {formik.touched.detailing && formik.errors.detailing && (
            <FormError>{formik.errors.detailing}</FormError>
          )}
        </FormGroup>
        <SaveButton type="button" onClick={() => {}}>
          Send
        </SaveButton>
      </Form>
    </Container>
  );
}

export default App;
