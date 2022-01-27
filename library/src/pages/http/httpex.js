
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";
import { getdata } from "../../services/httpEx";
const HttpEx = () => {

    const [todos, settodo] = useState([])
    useEffect(() => {
        setTimeout(() => {
            getdata().then((responce) => {
                settodo(responce.data)
                console.log(responce.data)
            })
        }, 2000);

    }, [])

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                {todos.length == 0 ? <LinearProgress /> : <></>}

            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>userId</TableCell>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="left">title</TableCell>
                            <TableCell align="right">completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((row) => (
                            <TableRow key={row.userId}>
                                <TableCell> {row.userId}</TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="right">{JSON.stringify(row.completed)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default HttpEx