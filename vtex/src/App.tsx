import React, { useEffect, useState } from 'react';
import FormGroup from './components/FormGroup';
import Label from './components/Label';
import Input from './components/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  CheckboxItem,
  Container,
  ContainerWhite,
  Form,
  FormError,
  FormLabel,
  Logo,
  SaveButton,
} from './styles';
import TextArea from './components/TextArea';
import { useTicket } from './hooks';
import { useMutation } from 'react-query';
import { useToast } from './contexts/Toast';
import DropDown from './components/DropDown';
import {
  accountNameFieldId,
  emailFieldId,
  subjectFieldId,
  subjects,
} from './settings';
import CheckBox from './components/CheckBox';
import DropDownField from './components/DropDownField';
import LoadingIndicator from './components/LoadingIndicator';
import ImagePicker from './components/ImagePicker';

const App: React.FC = () => {
  const [subjectSelected, setSubjectSelected] = useState(subjects[0]);
  const [dynamicFormInputs, setDynamicFormInputs] = useState<IFieldInput[]>([]);
  const [dynamicFormInputsErros, setDynamicFormInputsErros] = useState<
    IFieldError[]
  >([]);
  const [image, setImage] = useState<IImage>();

  const { createTicket } = useTicket();
  const { addToast } = useToast();

  useEffect(() => {
    setDynamicFormInputs(returnPopulatedSubjectFields(subjects[0]));
  }, []);

  const returnPopulatedSubjectFields = (subject: ISubject) => {
    const concatArray = [] as IFieldInput[];
    subject.fields.forEach((field) => {
      switch (field.type) {
        case 'number': {
          concatArray.push({ ...field, value: undefined });
          break;
        }
        case 'boolean': {
          concatArray.push({ ...field, value: false });
          break;
        }
        case 'dropdown': {
          if (field.dropDownItems && field.dropDownItems?.length > 0) {
            concatArray.push({ ...field, value: field.dropDownItems[0].tag });
          }
          break;
        }
        case 'image': {
          concatArray.push({ ...field, value: false });
        }
      }
    });
    return concatArray;
  };

  const onCreateTicket = useMutation(
    async (ticketBody: ITicketData) => await createTicket(ticketBody),
    {
      onError: () => {
        addToast('Error trying to send form', 'error');
      },
      onSuccess: () => {
        setDynamicFormInputs([]);
        formik.resetForm();
        addToast('Form sent!');
      },
    }
  );

  const validationSchema = yup.object({
    accountName: yup.string().required('Required'),
    email: yup.string().email('e-mail invalid').required('Required'),
    detailing: yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      accountName: '',
      email: '',
      detailing: '',
    },
    onSubmit: (values) => {
      let priority = 'high';
      switch (subjectSelected.tag) {
        case 'orders': {
          priority = 'high';
          break;
        }
        case 'payments': {
          priority = 'urgent';
          break;
        }
        case 'catalog': {
          priority = 'normal';
          break;
        }
        case 'others': {
          priority = 'low';
          break;
        }
      }

      const dynamicFieldData = [] as ICustomFieldZendesk[];

      dynamicFormInputs.forEach((input) => {
        if (input.parent === subjectSelected.tag) {
          dynamicFieldData.push({
            id: input.zendeskId,
            value: input.type === 'dropdown' ? input.value?.tag : input.value,
          });
        }
      });

      const data = {
        ticket: {
          comment: {
            body: values.detailing,
            uploads: [image ? image.token : undefined],
          },
          priority: priority,
          subject: subjectSelected.name,
          custom_fields: [
            { id: subjectFieldId, value: subjectSelected.tag },
            { id: accountNameFieldId, value: values.accountName },
            { id: emailFieldId, value: values.email },
            ...dynamicFieldData,
          ],
        },
      } as ITicketData;
      console.log(JSON.stringify(data));

      onCreateTicket.mutate(data);
    },
    validationSchema,
  });

  const onChangeValue = (index: number, newValue: any) => {
    let copy = [...dynamicFormInputs];
    copy[index].value = newValue;
    setDynamicFormInputs([...copy]);
  };

  const checkIfErrorExists = (field: IField) => {
    return dynamicFormInputsErros.find(
      (error) => error.zendeskId === field.zendeskId
    );
  };

  const removeErrorFromList = (field: IField) => {
    const filteredList = dynamicFormInputsErros.filter(
      (item) => item.zendeskId !== field.zendeskId
    );
    setDynamicFormInputsErros(filteredList);
  };

  const renderDynamicForm = (field: IField) => {
    let index = -1;
    index = dynamicFormInputs.findIndex((dynamicField) => {
      return dynamicField.zendeskId === field.zendeskId;
    });

    if (index === -1 || index === undefined) {
      return;
    }

    const find = dynamicFormInputs[index];
    if (find.type === 'number') {
      const errorExists = checkIfErrorExists(field);
      return (
        <FormGroup key={find.zendeskId}>
          <Label>{find.name}</Label>
          <Input
            type={'number'}
            placeholder={find.name}
            name={find.name}
            onChange={(name) => {
              removeErrorFromList(field);
              onChangeValue(index, name.currentTarget.value);
            }}
            value={dynamicFormInputs[index].value}
            onBlur={(value) => {
              if (!value.currentTarget.value && !errorExists) {
                setDynamicFormInputsErros([
                  ...dynamicFormInputsErros,
                  { ...find, errorMessage: 'Required' },
                ]);
              }
            }}
          />
          {errorExists && <FormError>{errorExists.errorMessage}</FormError>}
        </FormGroup>
      );
    } else if (find.type === 'boolean') {
      return (
        <FormGroup key={find.zendeskId}>
          <div>
            <CheckboxItem>
              <FormLabel htmlFor={find.name}>Affecting all users?</FormLabel>
              <CheckBox
                name={find.name}
                id={find.name}
                checked={find.value}
                onChange={() =>
                  onChangeValue(index, !dynamicFormInputs[index].value)
                }
              />
            </CheckboxItem>
          </div>
        </FormGroup>
      );
    } else if (find.type === 'dropdown' && find.dropDownItems) {
      return (
        <FormGroup key={find.name}>
          <FormLabel htmlFor={find.name}>{find.name}</FormLabel>
          <DropDownField
            selectedValue={find.value}
            list={find.dropDownItems}
            onChange={(value) => onChangeValue(index, value)}
          />
        </FormGroup>
      );
    } else if (find.type === 'image') {
      return (
        <FormGroup key={find.name}>
          <FormLabel htmlFor={find.name}>{find.name}</FormLabel>
          <ImagePicker
            description="Select Image"
            onImageUploaded={(imageUploaded) => setImage(imageUploaded)}
          />
        </FormGroup>
      );
    }
  };

  return (
    <Container>
      <ContainerWhite>
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
            <DropDown
              selectedValue={subjectSelected}
              onChange={(value) => {
                setSubjectSelected(value);
                let find;
                for (let i = 0; i < dynamicFormInputs.length; i++) {
                  find = value.fields.find(
                    (field) =>
                      field.zendeskId === dynamicFormInputs[i].zendeskId
                  );
                  if (find) return;
                }

                if (!find) {
                  setDynamicFormInputs([
                    ...dynamicFormInputs,
                    ...returnPopulatedSubjectFields(value),
                  ]);
                }
              }}
            />
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
          {subjectSelected.fields.map((field) => renderDynamicForm(field))}
        </Form>

        {onCreateTicket.isLoading ? (
          <LoadingIndicator />
        ) : (
          <SaveButton
            type="button"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Send
          </SaveButton>
        )}
      </ContainerWhite>
    </Container>
  );
};

export default App;
