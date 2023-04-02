import * as React from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    question?: string,
    children?: ReactJSXElement
}

const QACard: React.FC<Props> = ({ question, children }) => (
    <Item sx={{ padding: 2 }}>
        <Chip label="Q" color="primary" /> {question}
        <Divider />
        {children}
    </Item>
);

export default QACard
