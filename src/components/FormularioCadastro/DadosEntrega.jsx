import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosEntrega() {
    return(<form>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Endereço"
            id="endereco"
            type="text"
        />
        <TextField
            variant="outlined"
            margin="normal"
            label="Número"
            id="numero"
            type="number"
            />
        <TextField
            id="estado"
            type="text"
            variant="outlined"
            margin="normal"
            label="Estado"
        />
        <TextField
            id="cidade"
            type="text"
            variant="outlined"
            margin="normal"
            label="Cidade"
        />
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="CEP"
            type="number"
            id="numero"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Fiinalizar Cadastro</Button>
    </form>);
}

export default DadosEntrega;