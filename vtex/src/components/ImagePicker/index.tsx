import React, { useState, useRef, useEffect, useCallback } from 'react';

import LoadingIndicator from '../LoadingIndicator';
import {
  Container,
  ImageHolder,
  ImageUploaded,
  SearchPhotoButton,
  SpanUploadImage,
} from './styles';
import { useTicket } from '../../hooks';
import { useToast } from '../../contexts/Toast';

interface IImagePicker {
  onImageUploaded: ({ token, url }: IImage) => void;
  description: string;
}

const ImagePicker: React.FC<IImagePicker> = ({
  onImageUploaded,
  description,
}) => {
  const inputImageFile = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();
  const { uploadImage } = useTicket();

  const onUploadImage = useCallback(async () => {
    if (image) {
      const response = await uploadImage(image);
      console.log(response);
      if (false) {
        //TODO:
        // if (response?.httpStatus !== 201) {
        setIsLoading(false);
        setImage(undefined);
        return;
      } else {
        addToast('Imagem carregada com sucesso', 'success');
        onImageUploaded({
          token: response.upload.token,
          url: response.upload.attachment.content_url,
        });
        setIsLoading(false);
      }
    }
  }, [addToast, image, onImageUploaded, uploadImage]);

  useEffect(() => {
    if (image) {
      onUploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const imageIsTooBig = (chosenImage: File) => {
    if (chosenImage.size > 5000000) {
      alert(
        'A imagem selecionada é grande demais. Por favor, selecione imagens com tamanho até 5MB.'
      );
      return true;
    }
    return false;
  };

  const imageHasUnsupportedExtension = (chosenImage: File) => {
    const extension = chosenImage.type.split('/')[1];
    const ACCEPTED_EXTENSIONS = ['jpg', 'jpeg', 'png'];
    if (!ACCEPTED_EXTENSIONS.includes(extension)) {
      alert(
        `Extensão do arquivo não é suportada. Por favor, envie imagens jpg, jpeg ou png`
      );
      return true;
    }
    return false;
  };

  const isImageValid = (chosenImage: File) => {
    if (imageHasUnsupportedExtension(chosenImage)) return false;
    if (imageIsTooBig(chosenImage)) return false;
    return true;
  };

  const onFileSelectorPress = () => {
    if (inputImageFile.current) {
      inputImageFile.current.click();
    }
  };

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (isImageValid(event.target.files[0])) {
        setImage(event.target.files[0]);
        setImageSrc(URL.createObjectURL(event.target.files[0]));
        setIsLoading(true);
        event.target.value = '';
      }
    }
  };

  //////////////////////////////////////////////////
  //////////////// RENDER FUNCTIONS ///////////////
  /////////////////////////////////////////////////

  const renderImage = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (imageSrc) {
      return (
        <ImageUploaded
          src={imageSrc}
          alt="Imagem selecionada"
          onClick={onFileSelectorPress}
        />
      );
    }

    return (
      <SpanUploadImage onClick={onFileSelectorPress}>
        150px
        <br />X<br />
        150px
      </SpanUploadImage>
    );
  };

  return (
    <Container>
      <ImageHolder>{renderImage()}</ImageHolder>
      <input
        type="file"
        id="file"
        ref={inputImageFile}
        style={{ display: 'none' }}
        onChange={onImageChange}
      />
    </Container>
  );
};

export default ImagePicker;
