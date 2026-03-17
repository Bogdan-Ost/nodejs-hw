import { getAllNotes, getNoteById } from '../controllers/notesControllers';
import { Router } from 'express';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);

export default router;
