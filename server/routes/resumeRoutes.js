import {
  uploadResume,
  getResume,
  getUserResumes,
} from '../controllers/resumeController.js';

const router = express.Router();

router.post(
  '/upload',
  protect,
  upload.single('resume'),
  uploadResume
);

router.get('/history', protect, getUserResumes);

router.get('/:id', protect, getResume);

export default router;
