import React, { useContext } from 'react';
import CsvUploader from '../Components/CsvUploader';
import CsvTable from '../Components/CsvTable';
import CsvEditButtons from '../Components/CsvEditButtons';
import { Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { PermissionContext } from '../Context/PermissionContext';

const AddButton = styled(Button)({
  backgroundColor: '#00bbd1',
  color: 'white',
  '&:hover': {
    color: '#00bbd1',
    backgroundColor: '#191919',
  }
});

const AppContainer = styled(Paper)({
  display: 'flex',
  width:"80vw",
  flexDirection: 'column',
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
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h5">CSV List</Typography>
      <AddButton variant="contained" style={{color:"rgb(224 224 224)",background:'rgb(21 22 22)'}} onClick={handleOpen}>
        Add File
      </AddButton>
      </div>
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
