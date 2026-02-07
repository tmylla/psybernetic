/**
 * Papers Page - Neural Network Aesthetic
 * 
 * Design Philosophy:
 * - Interactive table with filtering
 * - Card view for mobile
 * - Detailed paper information
 */

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { 
  FileText, 
  ExternalLink, 
  Search,
  Filter,
  Calendar,
  Building2,
  Tag,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Paper {
  title: string;
  date: string;
  organization: string;
  journal: string;
  tags: string[];
  method: string;
  results: string;
  contribution: string;
  link: string;
}

const papers: Paper[] = [
  {
    title: "Use of Artificial Intelligence in Mental Healthcare, Health Psychology, and Related Research: A Narrative Review",
    date: "2025-11-30",
    organization: "Health Science Reports",
    journal: "Health Sci Rep",
    tags: ["AI", "Mental Health", "Chatbots", "Emotion Recognition"],
    method: "Literature review (Scopus, Web of Science); 112 initial articles, 30 final articles reviewed",
    results: "AI shows potential in prediction and decision support; System-on-chip models achieve high accuracy in emotion recognition",
    contribution: "Comprehensive review of AI applications in mental healthcare; Identifies challenges and opportunities",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12665507/"
  },
  {
    title: "Psychology of AI: How AI impacts the way people feel, think, and behave",
    date: "2024-01-01",
    organization: "Current Opinion in Psychology",
    journal: "Current Opinion in Psychology, Vol. 58",
    tags: ["AI Psychology", "Human Behavior", "Cognition", "Trust"],
    method: "Review article synthesizing emerging research",
    results: "Identifies algorithm appreciation, human judgment vs algorithmic judgment, trust calibration",
    contribution: "Catalyzes dialogue on psychology of AI",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2352250X24000484"
  },
  {
    title: "Use of AI-based mental health tools and psychological well-being among Chinese university students",
    date: "2025-11-17",
    organization: "Scientific Reports (Nature)",
    journal: "Scientific Reports, Vol. 15",
    tags: ["AI Mental Health Tools", "Psychological Well-being", "Autonomy"],
    method: "Cross-sectional survey (N=3,859); Structural equation modeling",
    results: "AI tool use positively associated with well-being (β=0.229); Emotional self-efficacy mediation (β=0.121)",
    contribution: "Identifies psychological mechanisms through which AI tools enhance well-being",
    link: "https://www.nature.com/articles/s41598-025-24013-8"
  },
  {
    title: "Transforming mental health research and care through artificial intelligence",
    date: "2026-01-15",
    organization: "Science",
    journal: "Science, Vol. 391, Issue 6782",
    tags: ["AI Mental Health", "Clinical Decision Support", "Precision Psychiatry"],
    method: "Comprehensive review of AI applications across care continuum",
    results: "AI applications in pretreatment monitoring, during-treatment support, post-treatment prevention",
    contribution: "Provides roadmap for responsible AI deployment in mental health",
    link: "https://www.science.org/doi/10.1126/science.adz9193"
  },
  {
    title: "Applications of Artificial Intelligence in Psychiatry and Psychology Education: Scoping Review",
    date: "2025-07-28",
    organization: "JMIR Medical Education",
    journal: "JMIR Medical Education, Vol. 11",
    tags: ["AI Education", "Psychiatry Training", "Clinical Decision Support"],
    method: "Scoping review; Systematic search across 6 databases",
    results: "Identified 8 categories of AI applications in psychiatry and psychology education",
    contribution: "Comprehensive overview of AI's role in training mental health professionals",
    link: "https://mededu.jmir.org/2025/1/e75238"
  },
  {
    title: "Generative AI Mental Health Chatbots as Therapeutic Tools: Systematic Review and Meta-Analysis",
    date: "2025-12-16",
    organization: "Journal of Medical Internet Research",
    journal: "Journal of Medical Internet Research, Vol. 27",
    tags: ["Generative AI", "Chatbots", "Mental Health Treatment", "Meta-analysis"],
    method: "Systematic review and meta-analysis; 26 studies (narrative), 14 RCTs (meta-analysis); N=6,314",
    results: "Effect size ES=0.30 (p=0.047); GenAI chatbots effective in reducing depression, anxiety",
    contribution: "Demonstrates efficacy of AI chatbots for mental health treatment",
    link: "https://www.jmir.org/2025/1/e78238/"
  },
  {
    title: "Practical AI application in psychiatry: historical review and future directions",
    date: "2025-06-03",
    organization: "Molecular Psychiatry (Nature)",
    journal: "Molecular Psychiatry, Vol. 30",
    tags: ["AI in Psychiatry", "Diagnostic Accuracy", "Precision Treatment"],
    method: "Expert review synthesizing historical development and current applications",
    results: "ML models achieve 48.1-62.0% diagnostic accuracy with multivariate neuroimaging",
    contribution: "Comprehensive overview of AI's utility and challenges in psychiatry",
    link: "https://www.nature.com/articles/s41380-025-03072-3"
  },
  {
    title: "Influence of AI behavior on human moral decisions, agency, and responsibility",
    date: "2025-04-10",
    organization: "Scientific Reports (Nature)",
    journal: "Scientific Reports, Vol. 15",
    tags: ["AI Ethics", "Moral Decision-making", "Sense of Agency"],
    method: "Experimental study with military cadets; Drone operator task with moral dilemmas",
    results: "AI behavior influences moral decisions; Increased implicit sense of agency",
    contribution: "Demonstrates AI's impact on moral decision-making and agency attribution",
    link: "https://www.nature.com/articles/s41598-025-95587-6"
  },
  {
    title: "AI Technology panic—is AI Dependence Bad for Mental Health? A Cross-Lagged Panel Model",
    date: "2024-03-12",
    organization: "Psychology Research and Behavior Management",
    journal: "Psychology Research and Behavior Management, Vol. 17",
    tags: ["AI Dependence", "Adolescent Mental Health", "Longitudinal Study"],
    method: "Cross-lagged panel study; Two time points; Mediation analysis",
    results: "17.14% AI dependence at T1, 24.19% at T2; Escape motivation mediated relationship",
    contribution: "Clarifies relationship between AI dependence and mental health",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10944174/"
  },
  {
    title: "Generative artificial intelligence addiction syndrome: A new behavioral disorder?",
    date: "2025-01-01",
    organization: "Asian Journal of Psychiatry",
    journal: "Asian Journal of Psychiatry, Vol. 107",
    tags: ["AI Addiction", "Behavioral Disorder", "Generative AI"],
    method: "Conceptual/theoretical paper proposing new diagnostic framework",
    results: "Identifies GAID as distinct from passive digital addiction",
    contribution: "Proposes GAID as new behavioral disorder category",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1876201825001194"
  },
  {
    title: "Large Language Models Demonstrate Distinct Personality Profiles",
    date: "2025-05-23",
    organization: "Cureus",
    journal: "Cureus, Vol. 17, Issue 5",
    tags: ["LLM Personality", "Psychometric Analysis", "MBTI", "Big Five"],
    method: "Psychometric analysis; OEJTS and Big Five Personality Test; MANOVA",
    results: "Significant personality differences across LLMs; ChatGPT-3.5: ENTJ; Claude 3 Opus: INTJ",
    contribution: "First psychometric analysis of LLM personality in medical context",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12183331/"
  },
  {
    title: "Large language models are proficient in solving and creating emotional intelligence tests",
    date: "2025-05-21",
    organization: "Communications Psychology (Nature)",
    journal: "Communications Psychology, Vol. 3",
    tags: ["LLM Emotional Intelligence", "Empathy", "Affect Recognition"],
    method: "Performance-based EI tests; Comparison with human performance (N=467)",
    results: "LLMs achieved 81% average accuracy on EI tests vs. 56% human average",
    contribution: "Demonstrates LLMs' capacity for emotional intelligence",
    link: "https://www.nature.com/articles/s44271-025-00258-x"
  },
  {
    title: "Ethical challenges and evolving strategies in the integration of artificial intelligence into clinical practice",
    date: "2025-04-08",
    organization: "PLOS Digital Health",
    journal: "PLOS Digital Health, Vol. 4, Issue 4",
    tags: ["AI Ethics", "Fairness", "Transparency", "Privacy"],
    method: "Review article addressing five critical ethical concerns",
    results: "Identifies bias, lack of transparency, privacy issues, accountability gaps",
    contribution: "Comprehensive framework for ethical AI in healthcare",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11977975/"
  },
  {
    title: "The use of artificial intelligence in psychotherapy: development of intelligent therapeutic systems",
    date: "2025-02-28",
    organization: "BMC Psychology",
    journal: "BMC Psychology, Vol. 13",
    tags: ["AI Psychotherapy", "Chatbots", "Crisis Intervention"],
    method: "Comparative study; AI chatbot (Friend) vs. traditional therapy in crisis situations",
    results: "Friend chatbot: 30% anxiety reduction, 35% depression reduction",
    contribution: "Demonstrates AI effectiveness while highlighting superiority of human therapeutic relationship",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11871827/"
  },
  {
    title: "The Cognitive Cost of AI: How AI Anxiety and Attitudes Influence Decision Fatigue",
    date: "2025-08-20",
    organization: "Annals of Neurosciences",
    journal: "Annals of Neurosciences",
    tags: ["AI Anxiety", "Cognitive Load", "Decision Fatigue"],
    method: "Structured survey (N=500); Pearson correlation analysis",
    results: "Long-term AI use associated with mental exhaustion (r=0.905) and reduced decision confidence",
    contribution: "Identifies cognitive costs of prolonged AI use",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12367725/"
  },
  {
    title: "The relational shift: why we need \"AI Psychology\" Now as a core field",
    date: "2025-10-21",
    organization: "Journal of Psychology and AI",
    journal: "Journal of Psychology and AI, Vol. 1, Issue 1",
    tags: ["AI Psychology", "Human-AI Interaction", "New Discipline"],
    method: "Conceptual/position paper establishing theoretical framework",
    results: "Proposes AI Psychology as distinct field with core research priorities",
    contribution: "Foundational paper establishing AI Psychology as essential discipline",
    link: "https://www.tandfonline.com/doi/full/10.1080/29974100.2025.2573928"
  },
  {
    title: "Psychiatry in the age of AI: transforming theory, practice, and medical education",
    date: "2025-09-29",
    organization: "Frontiers in Public Health",
    journal: "Frontiers in Public Health, Vol. 13",
    tags: ["AI in Psychiatry", "Medical Education", "Clinical Practice"],
    method: "Narrative review integrating three levels of analysis",
    results: "AI contributes to nosological reconstruction, diagnostic objectification",
    contribution: "Comprehensive framework for understanding AI's role in psychiatry",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12515848/"
  },
];

// Get all unique tags
const allTags = Array.from(new Set(papers.flatMap(p => p.tags))).sort();

// Get all unique organizations
const allOrgs = Array.from(new Set(papers.map(p => p.organization))).sort();

export default function Papers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedOrg, setSelectedOrg] = useState<string>("all");
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const filteredPapers = useMemo(() => {
    return papers.filter(paper => {
      const matchesSearch = searchQuery === "" || 
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTag = selectedTag === "all" || paper.tags.includes(selectedTag);
      const matchesOrg = selectedOrg === "all" || paper.organization === selectedOrg;
      
      return matchesSearch && matchesTag && matchesOrg;
    });
  }, [searchQuery, selectedTag, selectedOrg]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-neural opacity-50" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-4 border-primary/50">
              <FileText className="w-3 h-3 mr-1" />
              共 {papers.length} 篇论文
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">论文汇总</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              收录2024-2026年间发表的AI心理学相关高质量学术论文，
              涵盖Nature、Science、JMIR等顶级期刊。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 md:top-20 z-40 py-4 glass-card border-y border-border/30">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="搜索论文标题、期刊或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/30 border-border/50"
              />
            </div>
            
            {/* Tag Filter */}
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-full md:w-48 bg-muted/30 border-border/50">
                <Tag className="w-4 h-4 mr-2" />
                <SelectValue placeholder="选择标签" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部标签</SelectItem>
                {allTags.map(tag => (
                  <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Organization Filter */}
            <Select value={selectedOrg} onValueChange={setSelectedOrg}>
              <SelectTrigger className="w-full md:w-56 bg-muted/30 border-border/50">
                <Building2 className="w-4 h-4 mr-2" />
                <SelectValue placeholder="选择来源" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部来源</SelectItem>
                {allOrgs.map(org => (
                  <SelectItem key={org} value={org}>{org}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Results count */}
          <div className="mt-3 text-sm text-muted-foreground">
            显示 {filteredPapers.length} / {papers.length} 篇论文
          </div>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Collapsible
                  open={expandedPaper === index}
                  onOpenChange={(open) => setExpandedPaper(open ? index : null)}
                >
                  <Card className="glass-card border-border/30 hover:border-primary/30 transition-colors">
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base md:text-lg leading-tight mb-2 pr-8">
                              {paper.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {paper.date}
                              </span>
                              <span className="hidden md:inline">•</span>
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                {paper.organization}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {paper.tags.slice(0, 3).map((tag, i) => (
                                <Badge 
                                  key={i} 
                                  variant="secondary" 
                                  className="text-xs bg-primary/10 text-primary border-primary/20"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {paper.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{paper.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="shrink-0">
                            {expandedPaper === index ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 border-t border-border/30 mt-2">
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">期刊/会议</h4>
                            <p className="text-sm text-muted-foreground">{paper.journal}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">研究方法</h4>
                            <p className="text-sm text-muted-foreground">{paper.method}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">主要结果</h4>
                            <p className="text-sm text-muted-foreground">{paper.results}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">主要贡献</h4>
                            <p className="text-sm text-muted-foreground">{paper.contribution}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            查看原文
                          </a>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </motion.div>

          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">没有找到匹配的论文</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("all");
                  setSelectedOrg("all");
                }}
              >
                清除筛选条件
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
