function ATSScoreCard({ score }) {
  const badge = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs improvement';
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-6">
        <div>
          <h3 className="text-sm uppercase tracking-[0.32em] text-slate-500">ATS Compatibility</h3>
          <p className="mt-4 text-5xl font-semibold text-slate-900">{score}%</p>
        </div>
        <div className="rounded-3xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
          {badge}
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-600">
        This score reflects resume formatting, keyword match rate, and document structure for modern applicant tracking systems.
      </p>
    </div>
  );
}

export default ATSScoreCard;
