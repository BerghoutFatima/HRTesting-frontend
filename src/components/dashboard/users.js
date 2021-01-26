import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField label="id" source="id"><h6>gggggg</h6></TextField>
            <TextField source="Nom du collaborateur" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);