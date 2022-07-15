import { Container, Typography } from '@mui/material';
import React from 'react';
import Paragraph from './Paragraph';
import SubTitle from './SubTitle';
import Topic from './Topic';

export default function TermsOfUse() {
	return (
		<Container style={{ maxWidth: '1110px', paddingBottom: '32px' }}>
			<Typography sx={{ fontSize: { xs: '43px', sm: '50px' } }} variant="h3" component="h1" textAlign="center" mt={1}>
				Termos de uso
			</Typography>

			<Topic title="1. Termos">
				<Paragraph>
					Ao acessar ao site Sharebook, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda
					que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está
					proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas
					comerciais aplicáveis.
				</Paragraph>
			</Topic>

			<Topic title="1. Uso de licença">
				<Paragraph>
					É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Sharebook , apenas
					para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob
					esta licença, você não pode:
				</Paragraph>
				<Paragraph mt={2}>1 - Modificar ou copiar os materiais;</Paragraph>
				<Paragraph mt={2}>
					2 - Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
				</Paragraph>
				<Paragraph mt={2}>3 - Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Sharebook;</Paragraph>
				<Paragraph mt={2}>4 - Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</Paragraph>
				<Paragraph mt={2}>{`5 - Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.`}</Paragraph>
				<Paragraph mt={2}>
					Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Sharebook a
					qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais
					baixados em sua posse, seja em formato eletrónico ou impresso.
				</Paragraph>
			</Topic>

			<Topic title="3. Isenção de responsabilidade">
				<Paragraph>{`1 - Os materiais no site da Sharebook são fornecidos 'como estão'. Sharebook não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.`}</Paragraph>
				<Paragraph mt={1}>
					2 - Além disso, o Sharebook não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à
					confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este
					site.
				</Paragraph>
			</Topic>

			<Topic title="4. Limitações">
				<Paragraph>
					Em nenhum caso o Sharebook ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por
					perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em
					Sharebook, mesmo que Sharebook ou um representante autorizado da Sharebook tenha sido notificado oralmente ou por escrito da
					possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de
					responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
				</Paragraph>
				<SubTitle>Precisão dos materiais</SubTitle>
				<Paragraph>
					Os materiais exibidos no site da Sharebook podem incluir erros técnicos, tipográficos ou fotográficos. Sharebook não garante que
					qualquer material em seu site seja preciso, completo ou atual. Sharebook pode fazer alterações nos materiais contidos em seu site
					a qualquer momento, sem aviso prévio. No entanto, Sharebook não se compromete a atualizar os materiais.
				</Paragraph>
			</Topic>

			<Topic title="5. Links">
				<Paragraph>
					O Sharebook não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A
					inclusão de qualquer link não implica endosso por Sharebook do site. O uso de qualquer site vinculado é por conta e risco do
					usuário.
				</Paragraph>
				<SubTitle>Modificações</SubTitle>
				<Paragraph>
					O Sharebook pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em
					ficar vinculado à versão atual desses termos de serviço.
				</Paragraph>

				<SubTitle>Lei aplicável</SubTitle>
				<Paragraph>
					Estes termos e condições são regidos e interpretados de acordo com as leis do Sharebook e você se submete irrevogavelmente à
					jurisdição exclusiva dos tribunais naquele estado ou localidade.
				</Paragraph>
			</Topic>

			<Topic title="6. Consentimento para tratamento de dados">
				<Paragraph>
					O Titular concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei
					Geral de Proteção de Dados Pessoais (LGPD). Ao manifestar sua aceitação para com o presente termo, o Titular consente e concorda
					que a Câmara Brasileira do Livro, CNPJ nº 60.762.942/0001-81, com sede na Rua Cristiano Viana, 91 – Pinheiros, São Paulo / SP,
					telefone: 11 3069-1300, e-mail sac@isbn.org.br, doravante denominada Controladora, tome decisões referentes ao tratamento de seus
					dados pessoais, dados referentes as empresas em que atuem os usuários ou dados necessários ao usufruto de serviços ofertados pela
					CBL, bem como realize o tratamento de tais dados, envolvendo operações como as que se referem a coleta, produção, recepção,
					classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação,
					avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
				</Paragraph>
				<SubTitle>Segurança dos dados</SubTitle>
				<Paragraph>
					A Controladora responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados
					pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer
					forma de tratamento inadequado ou ilícito. Em conformidade ao art. 48 da Lei nº 13.709, o Controlador comunicará ao Titular e à
					Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante
					ao Titular.
				</Paragraph>
				<SubTitle>Direitos do titular</SubTitle>
				<Paragraph>
					O Titular tem direito a obter da Controladora, em relação aos dados por ele tratados, a qualquer momento e mediante requisição: I
					- confirmação da existência de tratamento; II - acesso aos dados; III - correção de dados incompletos, inexatos ou desatualizados;
					IV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei
					nº 13.709; V - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e observados os
					segredos comercial e industrial, de acordo com a regulamentação do órgão controlador; V - portabilidade dos dados a outro
					fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados
					os segredos comercial e industrial; VI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas
					hipóteses previstas no art. 16 da Lei nº 13.709; VII - informação das entidades públicas e privadas com as quais o controlador
					realizou uso compartilhado de dados; VIII - informação sobre a possibilidade de não fornecer consentimento e sobre as
					consequências da negativa; IX - revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709.
				</Paragraph>
				<SubTitle>Direito de revogação do consentimento</SubTitle>
				<Paragraph>
					Este consentimento poderá ser revogado pelo Titular, a qualquer momento, mediante solicitação via e-mail ou correspondência ao
					Controlador.
				</Paragraph>
			</Topic>
		</Container>
	);
}
