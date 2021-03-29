import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

// Function Component
function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    // useEffect substitui componentDid... em function component
    useEffect(()=>{
        if(etapaAtual === formularios.length-1) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletaDados} />,
        <DadosPessoais aoEnviar={coletaDados} />,
        <DadosEntrega aoEnviar={coletaDados} />,
        <Typography align="center" variant="h5" component="h2">Obrigado pelo cadastro</Typography>
    ];

    function coletaDados(dados) {
        setDadosColetados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;