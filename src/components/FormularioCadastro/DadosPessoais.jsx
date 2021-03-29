import React, { useState, useContext } from 'react';
import { TextField, Switch, Button, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

// Function Component
function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState(""); // Hook de useState - retorna um array
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        // Formulário Controlado - Inputs controlados pelo ciclo de vida do React
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }
        }}>
            <TextField
                value={nome}
                onChange={(e)=> {
                    setNome(e.target.value);
                }}
                onBlur={validarCampo}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                margin="normal"
                variant="outlined"
                fullWidth
                required
                name="nome"
                id="nome"
                label="Nome"
                />
            <TextField
                value={sobrenome}
                onChange={(e)=> {
                    setSobrenome(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                fullWidth
                required
                name="sobrenome"
                id="sobrenome"
                label="Sobrenome"
            />
            <TextField
                value={cpf}
                onChange={(e)=> {
                    setCpf(e.target.value);
                }}
                onBlur={validarCampo}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                margin="normal"
                variant="outlined"
                fullWidth
                name="cpf"
                id="CPF"
                label="CPF"
            />
            
            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        onChange={(e)=>{
                            setPromocoes(e.target.checked);
                        }}
                        checked={promocoes}
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        onChange={(e)=>{
                            setNovidades(e.target.checked);
                        }}
                        checked={novidades}
                        color="primary"
                    />
                }
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;