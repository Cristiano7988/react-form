import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erros, setErros] = useState({senha:{valido:true, texto:""}});

    const validacoes = useContext(ValidacoesCadastro);

    function validarCampo(event) {
        const {name, value} =  event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar() {
        for(let campo in erros) {
            if(!erros[campo].valido) {
                return false
            }
        }
        return true;  
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(possoEnviar()) {
                aoEnviar({email, password});
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
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
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