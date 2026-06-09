import mammoth from 'mammoth';

export const parseDocx = async (buffer) => {
  const result = await mammoth.extractRawText({ buffer });
  return result.value || '';
};
