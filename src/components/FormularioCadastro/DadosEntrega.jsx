import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
const [ endereco, setEndereco] = useState("");
const [ numero, setNumero] = useState("");
const [ estado, setEstado] = useState("");
const [ cidade, setCidade] = useState("");
const [ cep, setCep] = useState("");

    return(<form onSubmit={(e)=>{
        e.preventDefault();
        aoEnviar({endereco, numero, estado, cidade, cep});
    }}>
        <TextField
            value={endereco}
            onChange={(e)=>{
                e.preventDefault();
                setEndereco(e.target.value);
            }}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Endereço"
            id="endereco"
            type="text"
            />
        <TextField
            value={numero}
            onChange={(e)=>{
                e.preventDefault();
                setNumero(e.target.value);
            }}
            variant="outlined"
            margin="normal"
            label="Número"
            id="numero"
            type="number"
            />
        <TextField
            value={estado}
            onChange={(e)=>{
                e.preventDefault();
                setEstado(e.target.value);
            }}
            id="estado"
            type="text"
            variant="outlined"
            margin="normal"
            label="Estado"
            />
        <TextField
            value={cidade}
            onChange={(e)=>{
                e.preventDefault();
                setCidade(e.target.value);
            }}
            id="cidade"
            type="text"
            variant="outlined"
            margin="normal"
            label="Cidade"
            />
        <TextField
            value={cep}
            onChange={(e)=>{
                e.preventDefault();
                setCep(e.target.value);
            }}
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