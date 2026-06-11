export const calculateATSScore = (text) => {
  let score = 0;

  const lowerText = text.toLowerCase();

  // Resume length
  const wordCount = text.split(/\s+/).length;

  if (wordCount >= 300) score += 20;
  else if (wordCount >= 200) score += 15;
  else if (wordCount >= 100) score += 10;

  // Important sections
  const sections = [
    'education',
    'experience',
    'skills',
    'project',
    'certification',
  ];

  sections.forEach((section) => {
    if (lowerText.includes(section)) {
      score += 5;
    }
  });

  // Technical skills
  const skills = [
    'javascript',
    'react',
    'node',
    'mongodb',
    'express',
    'python',
    'sql',
    'aws',
    'docker',
    'git',
    'html',
    'css',
    'java',
    'c++',
    'typescript',
  ];

  let matchedSkills = 0;

  skills.forEach((skill) => {
    if (lowerText.includes(skill)) {
      matchedSkills++;
    }
  });

  score += Math.min(matchedSkills * 3, 30);

  // Action verbs
  const verbs = [
    'developed',
    'implemented',
    'designed',
    'created',
    'managed',
    'led',
    'optimized',
    'improved',
  ];

  let verbCount = 0;

  verbs.forEach((verb) => {
    if (lowerText.includes(verb)) {
      verbCount++;
    }
  });

  score += Math.min(verbCount * 2, 10);

  return Math.min(score, 100);
};