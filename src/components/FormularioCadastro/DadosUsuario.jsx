import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            aoEnviar({email, password});
        }}>
            <TextField
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="email"
                label="email"
                type="email"
                />
            <TextField
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="senha"
                label="senha"
                type="password"
            />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;