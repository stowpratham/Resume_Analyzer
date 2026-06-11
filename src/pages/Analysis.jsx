import { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import ATSScoreCard from '../components/ATSScoreCard.jsx';
import SkillsCard from '../components/SkillsCard.jsx';
import api from '../services/api.js';


function Analysis() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const resumeId = localStorage.getItem('resumeId');

      if (!resumeId) {
        setLoading(false);
        return;
      }

      const response = await api.get(`/resume/${resumeId}`);

      setResume(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
    if (loading) {
    return (
      <DashboardLayout>
        <p className="text-center py-20">
          Loading analysis...
        </p>
      </DashboardLayout>
    );
  }

  const skillDisplayNames = {
  JAVASCRIPT: 'JavaScript',
  REACT: 'React',
  NODE: 'Node',
  MONGODB: 'MongoDB',
  PYTHON: 'Python',
  SQL: 'SQL',
  AWS: 'AWS',
  JAVA: 'Java',
  'C++': 'C++',
  HTML: 'HTML',
  CSS: 'CSS',
};
const extractedSkills = [
  ...new Set(
    resume?.extractedText?.match(
      /\b(JavaScript|React|Node|MongoDB|Python|SQL|AWS|Java|C\+\+|HTML|CSS)\b/gi
    )?.map(skill => skill.toUpperCase()) || []
  ),
];
  const missingSkills = ['AWS', 'Docker', 'TypeScript']
    .filter(skill => !extractedSkills.includes(skill));
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-brand-600">Analysis report</p>
              <h1 className="text-3xl font-semibold text-slate-900">Resume insights and ATS recommendations</h1>
            </div>
            <div className="rounded-3xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-soft">
              Latest report available
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <ATSScoreCard
  score={resume?.resumeInfo?.score || 0}
/>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-slate-900">Resume summary</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">Draft 3</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
  {resume?.extractedText
    ? resume.extractedText.substring(0, 500)
    : 'No resume data available.'}
</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-slate-900">Chart insights</h2>
              <p className="mt-4 text-sm text-slate-500">Placeholder for interactive score trends and skill distribution charts.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 text-center text-sm text-slate-500">Skill match trend</div>
                <div className="rounded-3xl bg-slate-50 p-5 text-center text-sm text-slate-500">Keyword density overview</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SkillsCard
              title="Extracted skills"
              description="Skills identified in your resume content that match industry keywords."
              skills={extractedSkills}
            />
            <SkillsCard
              title="Missing skills"
              description="Suggested skill keywords to add for improved ATS performance and relevance."
              skills={missingSkills}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Analysis;
