import React, { useContext } from 'react';
import { Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import { styled } from '@mui/system';
import { PermissionContext } from '../Context/PermissionContext';

const DownloadButton = styled(Button)({
  backgroundColor: '#00bbd1',
  margin: '5px',
  color: 'white',
});

const EditButton = styled(Button)({
  width: '10%',
  backgroundColor: '#00bbd1',
  color: 'white',
  margin: '5px',
  '&:hover': {
    color: '#00bbd1',
    backgroundColor: '#191919',
  },
});

const CsvEditButtonsContainer = styled('div')({
  marginTop: '16px',
});

const CsvEditButtons = () => {
  const {
    isEditing,
    handleEditClick,
    handleCancelEdit,
    handleSaveClick,
    editedFile,
    downloadPermission
  } = useContext(PermissionContext);

  return (
    <CsvEditButtonsContainer>
      {isEditing ? (
        <div>
          <Button variant="contained" color="secondary" onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#00bbd1',
              color: 'white',
              marginLeft: '10px',
              '&:hover': {
                color: '#00bbd1',
                backgroundColor: '#191919',
              },
            }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </div>
      ) : (
        <EditButton variant="contained" onClick={handleEditClick}>
          Edit
        </EditButton>
      )}
      {editedFile && downloadPermission && (
        <a href={editedFile} download="edited.csv">
          <DownloadButton variant="contained" startIcon={<GetAppIcon />}>
            Download Edited File
          </DownloadButton>
        </a>
      )}
    </CsvEditButtonsContainer>
  );
};

export default CsvEditButtons;
