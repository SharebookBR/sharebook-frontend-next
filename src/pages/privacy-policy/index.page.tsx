import { Container, Typography } from '@mui/material';
import React from 'react';
import Topic from './Topic';
import Video from './Video';

export default function PrivacyPolicy() {
	return (
		<Container style={{ maxWidth: '1110px', paddingBottom: '32px' }}>
			<Typography variant="h3" component="h1" textAlign="center" mt={1}>
				Política de privacidade
			</Typography>

			<Video />

			<Topic title="Seção 1 - O que faremos com esta informação ?">
				Quando você doa, pede ou ganha uma doação em nosso sistema, como parte do processo de doação de livros, coletamos as informações
				pessoais que você nos dá tais como: nome, e-mail e endereço. Quando você acessa nosso site, também recebemos automaticamente o
				protocolo de internet do seu computador, endereço de IP, a fim de obter informações que nos ajudam a aprender sobre seu navegador e
				sistema operacional. Email Marketing será realizado apenas caso você seja um usuário cadastrado. Nestes emails você poderá receber
				notícia sobre novos livros que sejam do seu interesse, com base em seu histórico de uso. A qualquer momento pode se desinscrever, caso
				deseje. (Opt-out)
			</Topic>

			<Topic title="Seção 2 - Consentimento">
				Como vocês obtêm meu consentimento? Quando você fornece informações pessoais como nome, telefone e endereço. Após a realização de
				ações entendemos que você está de acordo com a coleta de dados para serem utilizados pela nossa organização. Se pedimos por suas
				informações pessoais por uma razão secundária, como marketing, vamos lhe pedir diretamente por seu consentimento, ou lhe fornecer a
				oportunidade de dizer não. E caso você queira retirar seu consentimento, como proceder? Se após você nos fornecer seus dados, você
				mudar de ideia, você pode retirar o seu consentimento para que possamos entrar em contato, para a coleção de dados contínua, uso ou
				divulgação de suas informações, a qualquer momento, entrando em contato conosco em contato@sharebook.com.br.
			</Topic>

			<Topic title="Seção 3 - Divulgação">
				Podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.
			</Topic>

			<Topic title="Seção 4 - Serviços de terceiros">Em nenhuma situação enviamos seus dados para terceiros.</Topic>

			<Topic title="Seção 5 - Segurança">
				{`Para proteger suas informações pessoais, tomamos precauções razoáveis e seguimos as melhores práticas da indústria para nos certificar
				que elas não serão perdidas inadequadamente, usurpadas, acessadas, divulgadas, alteradas ou destruídas. Temos o cuidado de proteger
				sua senha com criptografia usando tecnologia "secure socket layer" (SSL) e armazenada com uma criptografia AES-256. Embora nenhum
				método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, nós seguimos todos os requisitos da PCI-DSS e
				implementamos padrões adicionais geralmente aceitos pela indústria.`}
			</Topic>

			<Topic title="Seção 6 - Alterações para essa política de privacidade">
				Reservamos o direito de modificar essa política de privacidade a qualquer momento, então por favor, revise-a com frequência.
				Alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação no site. Se fizermos alterações de materiais para
				essa política, iremos notificá-lo aqui que eles foram atualizados, para que você tenha ciência sobre quais informações coletamos, como
				as usamos, e sob que circunstâncias, se alguma, usamos e/ou divulgamos elas. Se nossa organização for adquirida ou fundida com outra
				empresa, suas informações podem ser transferidas para os novos proprietários para que você possa continuar a usar o sistema.
			</Topic>
		</Container>
	);
}
