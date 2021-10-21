import * as React from 'react';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});
export default function Empresa() {
    return (
        <div className="w-full max-w-sm px-4 py-3 mx-auto bg-transparent dark:bg-gray-800">

            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nombre Empresa
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Representante
                        </Typography>


                        <Typography variant="body2" color="text.secondary">
                            Rif
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            email@email.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            phone
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            adress
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            adress
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonGroup
                        fullWidth
                        size="large"
                        aria-label="default contained button group"
                        variant="contained"
                    >
                        <Button key="actualizar-empresa" href="/settings/empresas/edit">Actualizar</Button>,
                     

                    </ButtonGroup>
                       
                  

                </CardActions>
            </Card>
        </div>
    );
}