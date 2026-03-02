"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/tool-page-layout";
import { Copy, Check, Sparkles } from "lucide-react";

const CATEGORIES = [
  "General",
  "Coding",
  "Writing",
  "Marketing",
  "Research",
  "Data Analysis",
] as const;

const TEMPLATES: Record<string, { name: string; template: string }[]> = {
  General: [
    {
      name: "Expert Advisor",
      template: `You are an expert [DOMAIN] advisor. I need help with [TOPIC].\n\nContext:\n- My experience level: [BEGINNER/INTERMEDIATE/ADVANCED]\n- Goal: [SPECIFIC GOAL]\n- Constraints: [ANY LIMITATIONS]\n\nPlease provide:\n1. A clear explanation\n2. Step-by-step action plan\n3. Common pitfalls to avoid\n4. Resources for further learning`,
    },
    {
      name: "Decision Framework",
      template: `Help me decide between [OPTION A] and [OPTION B].\n\nCriteria that matter to me:\n1. [CRITERION 1] (weight: high/medium/low)\n2. [CRITERION 2] (weight: high/medium/low)\n3. [CRITERION 3] (weight: high/medium/low)\n\nContext: [BRIEF SITUATION DESCRIPTION]\n\nPlease create a comparison table and give a final recommendation with reasoning.`,
    },
  ],
  Coding: [
    {
      name: "Code Review",
      template: `Review the following [LANGUAGE] code for:\n- Bugs and potential issues\n- Performance optimizations\n- Security vulnerabilities\n- Code style improvements\n- Best practices\n\nCode:\n\`\`\`[LANGUAGE]\n[PASTE CODE HERE]\n\`\`\`\n\nPlease provide specific suggestions with corrected code snippets.`,
    },
    {
      name: "Architecture Design",
      template: `I'm building a [TYPE OF APPLICATION] with these requirements:\n\n**Functional:**\n- [REQUIREMENT 1]\n- [REQUIREMENT 2]\n\n**Non-functional:**\n- Scale: [EXPECTED USERS/LOAD]\n- Budget: [CONSTRAINT]\n- Timeline: [DEADLINE]\n\nTech stack: [CURRENT/PREFERRED STACK]\n\nDesign the system architecture including:\n1. Component diagram\n2. Data flow\n3. Database schema\n4. API endpoints\n5. Deployment strategy`,
    },
  ],
  Writing: [
    {
      name: "Blog Post Outline",
      template: `Write a blog post outline about [TOPIC].\n\nTarget audience: [WHO]\nTone: [PROFESSIONAL/CASUAL/TECHNICAL]\nLength: [WORD COUNT]\nGoal: [EDUCATE/PERSUADE/ENTERTAIN]\n\nInclude:\n- Compelling headline options (3)\n- Hook/intro paragraph\n- 5-7 main sections with key points\n- Conclusion with CTA\n- SEO keywords to target`,
    },
    {
      name: "Email Sequence",
      template: `Create a [NUMBER]-email sequence for [PURPOSE].\n\nAudience: [TARGET SEGMENT]\nProduct/Service: [WHAT YOU'RE PROMOTING]\nTone: [FRIENDLY/PROFESSIONAL/URGENT]\n\nFor each email provide:\n- Subject line (A/B options)\n- Preview text\n- Body copy\n- CTA button text\n- Send timing (days after trigger)`,
    },
  ],
  Marketing: [
    {
      name: "Landing Page Copy",
      template: `Write landing page copy for [PRODUCT/SERVICE].\n\nValue proposition: [MAIN BENEFIT]\nTarget customer: [WHO AND THEIR PAIN POINT]\nPrice: [PRICING INFO]\n\nSections needed:\n1. Hero headline + subheadline\n2. Problem agitation\n3. Solution introduction\n4. Feature-benefit list (5 items)\n5. Social proof section\n6. FAQ (5 questions)\n7. Final CTA`,
    },
  ],
  Research: [
    {
      name: "Literature Review",
      template: `Help me conduct a literature review on [TOPIC].\n\nField: [ACADEMIC DISCIPLINE]\nScope: [NARROW/BROAD]\nTime period: [LAST X YEARS]\n\nFor each key finding:\n1. Summarize the main argument\n2. Methodology used\n3. Strengths and limitations\n4. How it relates to [MY RESEARCH QUESTION]\n\nEnd with: gaps in current research and suggested directions.`,
    },
  ],
  "Data Analysis": [
    {
      name: "Data Exploration",
      template: `I have a dataset about [TOPIC] with these columns:\n[LIST COLUMNS AND TYPES]\n\nRows: [APPROXIMATE COUNT]\nSource: [WHERE DATA CAME FROM]\n\nPlease help me:\n1. Identify data quality issues\n2. Suggest exploratory analyses\n3. Recommend visualizations\n4. Propose statistical tests for [HYPOTHESIS]\n5. Write the Python/SQL code for each step`,
    },
  ],
};

function PromptGeneratorTool() {
  const [category, setCategory] = useState<string>("General");
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [copied, setCopied] = useState(false);

  const templates = TEMPLATES[category] || [];
  const current = templates[selectedTemplate];

  function handleCopy() {
    if (!current) return;
    navigator.clipboard.writeText(current.template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      {/* Category selector */}
      <div className="rounded-2xl border border-ex-border bg-ex-bg p-6">
        <label className="block text-sm font-semibold text-ex-dark mb-3">
          Choose a category
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setSelectedTemplate(0);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                category === cat
                  ? "bg-ex-green text-white shadow-sm"
                  : "bg-white border border-ex-border text-ex-gray hover:border-green-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template selector */}
        {templates.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {templates.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSelectedTemplate(i)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedTemplate === i
                    ? "bg-ex-dark text-white"
                    : "bg-white border border-ex-border text-ex-gray hover:bg-ex-bg"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Template output */}
      {current && (
        <div className="mt-6 rounded-2xl border border-ex-border bg-white">
          <div className="flex items-center justify-between border-b border-ex-border px-5 py-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-ex-green" />
              <span className="text-sm font-semibold text-ex-dark">
                {current.name}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-ex-green px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-ex-green-dark"
            >
              {copied ? (
                <Check size={13} />
              ) : (
                <Copy size={13} />
              )}
              {copied ? "Copied!" : "Copy Template"}
            </button>
          </div>
          <pre className="max-h-[400px] overflow-auto p-5 text-sm leading-relaxed text-ex-dark font-mono whitespace-pre-wrap">
            {current.template}
          </pre>
        </div>
      )}
    </div>
  );
}

export default function PromptGeneratorPage() {
  return (
    <ToolPageLayout
      title="Prompt Template Generator &mdash; Free Tool"
      subtitle="Generate structured, reusable prompt templates for any AI model. Copy and customize instantly."
      cta={{
        hook: "Generated a great prompt? Save it forever. Miromap's prompt library lets you organize, tag, and reuse prompts across ChatGPT, Claude, and every AI you use.",
        benefits: [
          "Prompt library with tags",
          "Works across all AI platforms",
          "Auto-organize with AI",
          "Search all saved prompts",
        ],
      }}
      relatedTools={[
        { name: "Chat Title Generator", href: "/tools/chat-title-generator" },
        { name: "ChatGPT Downloader", href: "/tools/chatgpt-downloader" },
        { name: "AI Conversation Counter", href: "/tools/ai-conversation-counter" },
      ]}
      faqItems={[
        {
          q: "What is a prompt template?",
          a: "A prompt template is a reusable structure with placeholders (like [TOPIC]) that you fill in for each use. Templates help you get consistent, high-quality responses from AI models.",
        },
        {
          q: "Do these work with Claude, Gemini, and other AIs?",
          a: "Yes. These templates are model-agnostic and work with ChatGPT, Claude, Gemini, Grok, Perplexity, and any other LLM.",
        },
        {
          q: "Can I save my customized templates?",
          a: "This free tool lets you copy templates. For saving, organizing, and syncing templates across platforms, try Miromap.",
        },
      ]}
    >
      <PromptGeneratorTool />
    </ToolPageLayout>
  );
}
