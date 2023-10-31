import React, { useContext } from 'react';
import CsvUploader from '../Components/CsvUploader';
import CsvTable from '../Components/CsvTable';
import CsvEditButtons from '../Components/CsvEditButtons';
import { Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { PermissionContext } from '../Context/PermissionContext';

const AddButton = styled(Button)({
  marginRight: '16px',
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#00bbd1',
  color: 'white',
  '&:hover': {
    color: '#00bbd1',
    backgroundColor: '#191919',
  },
});

const AppContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  margin: '16px',
  padding: '16px',
});

const CsvPage = () => {
  const {
    isModalOpen,
    handleOpen,
    handleClose,
    selectedFileName,
    uploading,
    handleFileChange,
    showTableFn,
    showTable,
    availFile,
    isEditing,
    editedData,
    editedFile,
    csvData,
  } = useContext(PermissionContext);

  return (
    <AppContainer>
      <Typography variant="h5">CSV List</Typography>
      <AddButton variant="contained" onClick={handleOpen}>
        Add File
      </AddButton>
      <CsvUploader/>
      {showTable && (
        <div style={{ marginTop: '16px' }}>
          <CsvTable/>
          <CsvEditButtons/>
        </div>
      )}
    </AppContainer>
  );
};

export default CsvPage;
