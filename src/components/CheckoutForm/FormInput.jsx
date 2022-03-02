import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useForm, Controller, useController, useFormContext } from 'react-hook-form';
const FormInput = ({ name, label, required }) => {
    const { control } = useForm();
    const {
        field  
      } = useController({
        name,
        control,
        rules: { required: true },  
      });
    const isError = false;
    return (
        <Grid item xs={12} sm={6}>
            <TextField
            name={name}
            
            />
        </Grid>
    );
};

export default FormInput;