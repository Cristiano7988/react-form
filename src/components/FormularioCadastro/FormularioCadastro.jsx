import React, { useState } from 'react';
import { TextField, Switch, Button, FormControlLabel } from '@material-ui/core';

// Function Component
function FormularioCadastro({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState(""); // Hook de useState - retorna um array
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        // Formulário Controlado - Inputs controlados pelo ciclo de vida do React
        <form onSubmit={(e)=>{
            e.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField
                value={nome}
                onChange={(e)=> {
                    setNome(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                fullWidth id="nome"
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
                id="sobrenome"
                label="Sobrenome"
            />
            <TextField
                value={cpf}
                onChange={(e)=> {
                    setCpf(e.target.value);
                }}
                onBlur={(e)=>{
                    const ehValido = validarCpf(cpf);
                    setErros({cpf: ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                margin="normal"
                variant="outlined"
                fullWidth
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
                        name="promoções"
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
                        name="novidades"
                        color="primary"
                    />
                }
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;