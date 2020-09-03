import React from 'react';
import Typography from "@material-ui/core/Typography";

const PageWrapper = ({ title, children }) => (
    <div style={{textAlign: 'center', padding: '30px', fontFamily: 'Baloo2', color: 'navy'}}>
        <Typography variant='h5' component='h5'>
            {title}
        </Typography>
        {children}
    </div>
)

export default PageWrapper;