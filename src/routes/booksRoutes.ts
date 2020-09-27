import express from 'express';
import * as booksRepositories from '../repositories/booksRepositories';

const router = express.Router();

router.get('/', async (req: any, res: any) => {
  const books = await booksRepositories.getBooks();
  res.send(books);
});

router.post('/', async (req: any, res: any) => {
  const book = await booksRepositories.addBook(req.body);
  res.send(book);
});

const booksRoutes = router;

export default booksRoutes;