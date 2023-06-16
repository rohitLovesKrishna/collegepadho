import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Grid } from '@mui/material'

export default function Skel() {
    return (
        <Grid container spacing={5} mt={"20px"}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1,].map((_) => {
                return <Grid item lg={5}>
                    <Skeleton variant="rectangular" width={"100%"} height={180} />
                    <Skeleton variant="rectangular" width={"100%"} height={40} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={"100%"} height={60} />
                </Grid>
            })}

        </Grid>
    );
}