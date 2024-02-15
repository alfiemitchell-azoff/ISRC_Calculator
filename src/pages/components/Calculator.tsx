import React, { useState, useEffect, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

const Calculator = () => {
    const [numOfCalls, setNumOfCalls] = useState<number>(0);
    const [numOfIsrcs, setNumOfIsrcs] = useState<number>(0);
    const [daysToComplete, setDaysToComplete] = useState<string>('');

    useEffect(() => {
        // Update state based on whether the input is a valid number or not
        if (!isNaN(numOfIsrcs)) {
            setNumOfCalls(Math.ceil(numOfIsrcs / 10000)); // Update the number of calls

            const startDate: Date = new Date('2019-01-01');
            const currentDate: Date = new Date();
            const timeDifference: number = currentDate.getTime() - startDate.getTime();
            const msInWeek: number = 1000 * 60 * 60 * 24 * 7;
            const numOfWeeks: number = Math.floor(timeDifference / msInWeek);

            const weeksSince2019: number = numOfWeeks - 1;
            console.log("Number of weeks since Jan 2019 (-1): ", weeksSince2019);

            const totalCalls: number = weeksSince2019 * 2 * numOfCalls;
            console.log("Number of calls: ", totalCalls);

            const totalDays: number = totalCalls / 100;

            const days: number = Math.floor(totalDays);
            const hours: number = Math.floor((totalDays - days) * 24);
            const minutes: number = Math.floor(((totalDays - days) * 24 - hours) * 60);

            setDaysToComplete(`${days} days, ${hours} hours and ${minutes} mins`);

        } else {
            setNumOfIsrcs(0); // If it's not a number, set the state to an empty string
            setNumOfCalls(0); // Reset the number of calls
            setDaysToComplete('');
        }
    }, [numOfIsrcs, numOfCalls]); // Trigger the effect whenever numOfIsrcs or numOfCalls changes

    const handleNumOfIsrcsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value; // Get the input value
        const isrcs: number = parseInt(value, 10); // Parse the value to a number
        setNumOfIsrcs(isrcs);
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Days to complete
                </Typography>
                <Typography variant="h5" component="div">
                    {daysToComplete.toString()}
                </Typography>
            </CardContent>
        </React.Fragment >
    )

    return (
        <div>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    value={numOfIsrcs.toString()}
                    onChange={handleNumOfIsrcsChange}
                    sx={{ paddingBottom: 4 }}
                    id="outlined-basic"
                    label="Number of ISRCs"
                    variant="outlined"
                />
                <Card
                    variant="outlined"
                    sx={{ width: 400, height: 100 }}
                >{card}</Card>
            </Box>
        </div >
    )
}

export default Calculator;