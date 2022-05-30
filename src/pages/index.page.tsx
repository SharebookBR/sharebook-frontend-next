import { List, ListItem } from '@mui/material';
import sharebookAxiosClient from '@sharebook-axios';
import type { NextPage } from 'next';
import { useState } from 'react';
import { IBook } from './home/types';

const Home: NextPage = () => {
	const [books, setBooks] = useState<IBook[]>([]);

	const getAvailableBooks = () => {
		sharebookAxiosClient.get('book/AvailableBooks').then((result: any) => {
			console.log('result', result);
			setBooks(result.data);
		});
	};

	return (
		<div>
			<main>
				<h1>Welcome to ShareBookBR</h1>
				<button onClick={() => getAvailableBooks()}>Get</button>
				<List>
					{books.map((book) => (
						<ListItem key={book.id}>{`${book.title} - ${book.category} - (${book.author})`}</ListItem>
					))}
				</List>
			</main>
		</div>
	);
};

export default Home;
