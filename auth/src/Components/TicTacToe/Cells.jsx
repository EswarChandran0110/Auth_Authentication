import { Grid, Paper } from "@mui/material";
import X from '../../assets/x.png'
const Cell = ({ cell, onClick }) => {

    
  return   <Grid item xs={4}>
        <Paper           
            variant="outlined"
            onClick={onClick}
            style={{
                height: 120,   
                width:120, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                margin: 'auto',
                

            }}
        >
            <img src={cell} alt="" />
        </Paper>
    </Grid>
}


export default Cell

