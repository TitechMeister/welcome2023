import * as React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import Drive from './Drive/Drive';
import Electronics from './Electronics/Electronics';
import Fairing from './Fairing/Fairing';
import Frame from './Frame/Frame';
import Propeller from './Propeller/Propeller';
import Wing from './Wing/Wing';

function Teams() {
    return (
        <div className="Teams">
            <Typography variant='h4' margin={2}>班紹介</Typography>
            <Stack spacing={2}>
                <Wing />
                <Propeller />
                <Frame />
                <Drive />
                <Fairing />
                <Electronics />
            </Stack>
        </div>
    )
}

export default Teams
