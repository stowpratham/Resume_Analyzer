function SkillsCard({ title, skills, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
