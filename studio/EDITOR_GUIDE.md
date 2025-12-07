# Editor Guide — Writing `project` case studies

Purpose: How to author the three evidence-backed sections (`Product Thinking`, `Process`, `Impact`) in the `project` document.

1. Product Thinking (short, hypothesis-focused)
- Aim: capture the design/product hypothesis and the user problem you set out to solve.
- Suggested structure:
  - One line problem statement (user + context + pain)
  - Hypothesis / success criteria (how you'll measure success)
  - Constraints or business goals that influenced decisions
- Example: "Users struggle to find pricing; hypothesis: a clearer pricing flow will reduce support requests by 30% within 3 months. Success = -30% support tickets, +10% checkout completion."

2. Process (artifact-driven narrative)
- Aim: explain *how* you worked — research methods, synthesis, ideation, prototyping, and validation.
- Use headings and short sections (Research, Synthesis, Ideation, Prototype, Test).
- Link to artifacts: paste Figma prototype URLs in `prototypeUrl` and attach screenshots to `gallery`.
- Prefer bullet lists for steps, and keep each step concise (1–3 sentences).

3. Impact (evidence-first outcomes)
- Aim: show measurable results and qualitative learnings.
- `impact.summary`: 1–2 sentences highlighting the main outcome.
- `impact.metrics`: add specific metrics (label, value, source). Examples:
  - Label: "Checkout conversion" — Value: "+12%" — Source: "GA dashboard, cohort Apr–Jun"
  - Label: "Support requests" — Value: "-34%" — Source: "Intercom reports"
- If metrics are unavailable, use qualitative outcomes (quotes, observed behaviour changes) and mark source.

Images and Accessibility
- Provide `alt` text for every image (cover + gallery). The schema validates `alt` for images.
- Upload high-quality images; use captions to give context.

Tone & Length
- Keep summaries short and scannable. Use the `excerpt` for the short lead used across the site.
- Use the full `productThinking` and `process` Portable Text fields for long-form content.

Previewing & Publishing
- Run `npm run dev` at the repo root to start both frontend and Studio.
- Use Presentation Mode (Studio -> Presentation) to check live edits on the frontend if `NEXT_PUBLIC_SANITY_STUDIO_URL` is set.
- Drafts are supported; the frontend `next-sanity` client controls draft vs published view.

If you want, I can add a small Studio desk tool or a document template to prefill headings for these three sections.