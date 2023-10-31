import React, { useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { PermissionContext } from '../Context/PermissionContext';

const StyledTableContainer = styled('div')({
  overflow: 'auto',
  maxHeight: '600px',
  maxWidth: '100%',
});

const CsvTable = () => {
  const {
    csvData,
    editedData,
    isEditing,
    handleInputChange,
  } = useContext(PermissionContext);
console.log(csvData)
  return (
    <StyledTableContainer>
      <Table>
        <TableBody>
          {csvData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((columnName) => (
                <TableCell key={columnName}>
                  {isEditing ? (
                    <TextField
                      value={editedData[rowIndex][columnName] || ''}
                      onChange={(e) => handleInputChange(e, rowIndex, columnName)}
                    />
                  ) : (
                    row[columnName]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CsvTable;
