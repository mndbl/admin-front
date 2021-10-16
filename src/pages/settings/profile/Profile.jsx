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
export default function Profile() {
    return (
        <div className="w-full max-w-sm px-4 py-3 mx-auto bg-transparent dark:bg-gray-800">

            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nombre
                        </Typography>
                        <div className="grid grid-cols-2">

                        <Typography gutterBottom variant="h6" component="div">
                            Role
                        </Typography>
                        <Chip label="Chip Outlined" variant="outlined" color="primary"/>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            email@email.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            phone
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            adress
                        </Typography>
                        <div className="grid grid-cols-2">
                        <Typography variant="body2" color="text.secondary">
                            cargo
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            departamento
                        </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <ButtonGroup
                        fullWidth
                        size="large"
                        aria-label="default contained button group"
                        variant="contained"
                    >
                        <Button key="one" >Enviar</Button>,
                        <Button key="two" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                    </ButtonGroup>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Avatar
                            </Button>
                        </label>
                  

                </CardActions> */}
            </Card>
        </div>
    );
}