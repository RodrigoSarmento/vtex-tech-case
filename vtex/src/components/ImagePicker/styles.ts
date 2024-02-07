import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const ImageHolder = styled.div`
  align-self: center;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.main};
  overflow: hidden;

  & > span {
    text-align: center;
  }
`;

const SearchPhotoButton = styled(Button)`
  width: 100%;
  align-self: center;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white.white1};
`;

export const SpanUploadImage = styled.span`
  cursor: pointer;
`;

export const ImageUploaded = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export { SearchPhotoButton };
