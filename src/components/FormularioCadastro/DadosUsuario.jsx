import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);
    
    const [erros, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(possoEnviar()) {
                aoEnviar({email, senha});
            }
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
                value={senha}
                onChange={(e)=>{
                    setSenha(e.target.value);
                }}
                onBlur={validarCampo}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="senha"
                id="senha"
                label="senha"
                type="password"
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;