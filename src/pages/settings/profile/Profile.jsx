import * as React from 'react';
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
                        image="https://images.unsplash.com/photo-1633793545207-bd5a09c3e4a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
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
                        <Button key="one" >Enviar</Button>,
                        <Button key="two" color="error" onClick={() => setOption('index')}>Cancelar</Button>,

                    </ButtonGroup>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Avatar
                            </Button>
                        </label>
                  

                </CardActions>
            </Card>
        </div>
    );
}