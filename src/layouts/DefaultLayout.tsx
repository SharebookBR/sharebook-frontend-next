import { SharebookFooter, SharebookNavBar } from '@sharebook-components';
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>ShareBook - Doe ou ganhe livros.</title>
        <meta
          name="description"
          content="Sharebook é um projeto social. Um app livre e gratuito para ajudar as pessoas a doar ou ganhar livros. Doe um único livro para você sentir a experiência. Do início ao fim. Nossos usuários tem relatado que é emocionante. Apesar de ser no anonimato você se envolve com muitas histórias incríveis. Você não faz ideia de como tem pessoas que realmente precisam. E da força transformadora que um simples livro causa na vida de uma pessoa. E que você ao escolher um ganhador, passa a fazer parte dessa história."
        />
        <link rel="icon" href="/bookIco.ico" />
      </Head>
      <SharebookNavBar />
      {children}
      <SharebookFooter />
    </>
  );
}
