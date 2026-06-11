import fs from 'fs/promises';
import path from 'path';
import Resume from '../models/Resume.js';
import { parseDocx } from '../services/docxParser.js';
import { parsePdf } from '../services/pdfParser.js';
import { calculateATSScore } from '../services/atsScorer.js';

export const uploadResume = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Resume file is required.', data: {} });
    }

    const filePath = req.file.path;
    const fileType = req.file.mimetype;
    const fileBuffer = await fs.readFile(filePath);

    let extractedText = '';
    if (fileType === 'application/pdf') {
      extractedText = await parsePdf(fileBuffer);
    } else {
      extractedText = await parseDocx(fileBuffer);
    }

    const resume = await Resume.create({
      userId: req.user._id,
      fileName: req.file.originalname,
      filePath: path.relative(process.cwd(), filePath),
      fileType,
      extractedText,
      uploadDate: new Date(),
      score: calculateATSScore(extractedText),
    });

    res.status(201).json({
      success: true,
      message: 'Resume uploaded and parsed successfully.',
      data: {
        resumeInfo: resume,
        extractedText,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getResume = async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });

    if (!resume) {
      return res.status(404).json({ success: false, message: 'Resume not found.', data: {} });
    }

    res.json({
      success: true,
      message: 'Resume retrieved successfully.',
      data: {
        resumeInfo: resume,
        extractedText: resume.extractedText,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getUserResumes = async (req, res, next) => {
  try {
    const resumes = await Resume.find({
      userId: req.user._id,
    }).sort({ uploadDate: -1 });

    res.json({
      success: true,
      message: 'Resumes fetched successfully.',
      data: resumes,
    });
  } catch (error) {
    next(error);
  }
};
