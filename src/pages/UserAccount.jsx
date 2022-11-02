
import React from 'react'
import NavBar from '../components/Navbar'
import axios from 'axios';

import { Box, TextField, Divider, Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';


function UserAccount() {

    const styles = {
        paper: {
            backgroundColor: "#b8b4b4",
            marginTop: "60px",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            justify: "flex-end",
            backgroundPosition: 'center',
            width: `calc(100vw)`,
            margin: 0,
            overflow: "hidden"
        }
    };


    const [value, setValue] = React.useState('1');
    const [Items, setItems] = useState()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <NavBar />
            <div style={styles.paper} >

                <Box display="flex" >


                    <Box sx={{ marginTop: "150px", marginLeft: "150px" }} align="left" >


                        <Card sx={{ minWidth: 250, height: "400px" }} >


                        </Card>





                    </Box>
                    <Box sx={{ marginTop: "100px", marginLeft: "150px" }} align="left" >



                        <Card sx={{ width: 700, height: "500px" }} >
                            <Divider sx={{ mt: 3 }}>My bookings</Divider>
                            <CardContent>
                                <TableContainer sx={{ ml: 0, mb: 3 }} component={Paper} >
                                    <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                                        <TableHead>

                                        </TableHead>
                                        {Items ? (

                                            <>
                                                <TableBody >
                                                    {Items?.map((car) => (
                                                        <TableRow
                                                            key={car.carname}
                                                        >
                                                            <TableCell sx={{ width: "250px" }} >
                                                                <img src={car.carimage} style={{ width: "150px", height: "100px" }} />
                                                            </TableCell>
                                                            <TableCell align="left" sx={{ mr: "5" }} >
                                                                <Typography variant="h5">{car.companyName} {car.carname}</Typography>
                                                                <Typography sx={{ mt: 1 }} > <EventSeatIcon sx={{ width: "17px" }} />  {car.seatCapacity}seater    <LocalGasStationIcon sx={{ width: "17px" }} /> {car.fueltype}    <SpeedIcon sx={{ width: "17px" }} />  {car.transmission}</Typography>
                                                            </TableCell>
                                                            {/*<TableCell align="center" ></TableCell>*/}
                                                            <TableCell align="center">{car.location} | {car.district}</TableCell>
                                                            <TableCell align="center" ><Typography sx={{ color: "black", fontWeight: "bold" }} variant="h6">{car.rentPerDay}₹</Typography></TableCell>
                                                            <TableCell align="center" ><Button variant="contained" color="success"><Link to={`/booking/${car._id}`}>Book now</Link></Button></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </>
                                        ) : (
                                            <>
                                                <Typography>Nothing to show</Typography>
                                            </>
                                        )}

                                    </Table>
                                </TableContainer>

                            </CardContent>

                            <CardActions sx={{ paddingTop: "17 0px", paddingLeft: "180px" }} size="small" align="center">


                            </CardActions>
                        </Card>




                    </Box>

                </Box>

            </div>

        </>
    )
}

export default UserAccount