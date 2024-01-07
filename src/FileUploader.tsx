import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const DropzoneContainer = styled.div`
  border: 2px dashed #3498db;
  padding: 20px;
  cursor: pointer;
  transition: border 0.3s ease;
  width: 100%; /* Adaugă această proprietate pentru a se întinde pe întreaga lungime */
  box-sizing: border-box; /* Asigură-te că padding-ul este inclus în lățimea totală */

  &:hover {
    border: 2px dashed #2980b9;
  }
`;

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const acceptedFile = acceptedFiles[0];

        // Verifică manual tipul de fișier acceptat
        if (acceptedFile.type.startsWith('image/')) {
          onFileUpload(acceptedFile);
        } else {
          console.error('Tip de fișier neacceptat. Vă rugăm să încărcați o imagine.');
        }
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropzoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Trageți aici imaginea...</p>
      ) : (
        <p>Trageți și lăsați o imagine aici sau faceți clic pentru a o încărca</p>
      )}
    </DropzoneContainer>
  );
};

export default FileUploader;
