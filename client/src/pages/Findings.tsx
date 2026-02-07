/**
 * Findings Page - Neural Network Aesthetic
 * 
 * Design Philosophy:
 * - Structured presentation of research findings
 * - Visual data highlights with glowing effects
 * - Sectioned content with smooth transitions
 */

import { motion } from "framer-motion";
import { 
  Brain, 
  Stethoscope, 
  Users, 
  AlertTriangle,
  TrendingUp,
  Zap,
  Heart,
  Shield,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    id: "discipline",
    icon: Brain,
    title: "AI Psychology 学科建设",
    color: "primary",
    findings: [
      {
        title: "AI Psychology 正式确立为独立学科",
        content: "2025年，《Journal of Psychology and AI》创刊，标志着AI Psychology作为独立交叉学科的正式确立。该学科聚焦于研究人类行为、认知、情感和心理健康如何受到与AI系统互动的影响。",
        highlight: "首个专业期刊创刊",
      },
      {
        title: "从工具到关系性伙伴的转变",
        content: "研究表明，AI已从单纯的工具转变为人类的关系性伙伴。用户开始向AI聊天机器人寻求陪伴和情感支持，将AI视为准人类的倾诉对象，形成对AI系统的依恋关系。",
        highlight: "关系性转变",
      },
      {
        title: "认知互依与技能衰退风险",
        content: "长期依赖AI可能导致认知互依现象，用户的某些认知技能可能出现衰退。研究建议在AI设计中融入用户赋权机制，保持人类的认知自主性。",
        highlight: "认知影响",
      },
    ],
  },
  {
    id: "clinical",
    icon: Stethoscope,
    title: "AI在心理健康诊断与治疗中的应用",
    color: "secondary",
    findings: [
      {
        title: "机器学习诊断准确率达48.1-62.0%",
        content: "利用多变量神经影像数据和多基因风险评分，机器学习模型在精神疾病诊断中达到48.1-62.0%的准确率。AI能够处理多模态数据，揭示人类难以察觉的潜在模式。",
        highlight: "48.1-62.0%",
        source: "Molecular Psychiatry 2025",
      },
      {
        title: "AI聊天机器人干预效果显著",
        content: "系统综述和元分析（N=6,314）显示，生成式AI聊天机器人在减少抑郁和焦虑方面具有显著效果（ES=0.30, p=0.047）。社交导向型聊天机器人比任务导向型更有效。",
        highlight: "ES=0.30",
        source: "JMIR 2025",
      },
      {
        title: "AI与传统治疗的效果对比",
        content: "Friend AI聊天机器人在危机情境中实现30%焦虑减少和35%抑郁减少，而传统治疗分别达到45%和50%。人类治疗师因个人互动和治疗关系而更具优势，建议采用混合模式。",
        highlight: "混合模式",
        source: "BMC Psychology 2025",
      },
      {
        title: "AI工具提升心理健康的机制",
        content: "对3,859名中国大学生的研究发现，AI心理健康工具的使用与心理健康呈正相关（β=0.229）。情感自我效能感和感知自主性是关键中介变量，模型解释了38%的方差。",
        highlight: "β=0.229",
        source: "Scientific Reports 2025",
      },
    ],
  },
  {
    id: "llm",
    icon: Zap,
    title: "大型语言模型的心理特征",
    color: "accent",
    findings: [
      {
        title: "LLM展现出稳定的人格特质",
        content: "首次对LLM进行的心理测量分析显示，不同模型展现出显著且可区分的人格特质。ChatGPT-3.5为ENTJ型，Claude 3 Opus为INTJ型，Gemini和Grok为INFJ型。",
        highlight: "MBTI差异显著",
        source: "Cureus 2025",
      },
      {
        title: "LLM情感智力超越人类平均水平",
        content: "在情感智力测试中，LLM达到81%的平均准确率，而人类平均为56%。LLM生成的测试题目与原始题目在难度上具有统计等效性，相关系数r=0.46。",
        highlight: "81% vs 56%",
        source: "Communications Psychology 2025",
      },
    ],
  },
  {
    id: "impact",
    icon: Users,
    title: "AI对人类认知与行为的影响",
    color: "primary",
    findings: [
      {
        title: "AI行为影响人类道德决策",
        content: "对军校学员的实验研究表明，AI行为会影响人类在道德困境中的决策。与AI互动时，隐性主体感增强，但显性责任感下降，这对高风险决策场景的AI设计具有重要启示。",
        highlight: "道德决策影响",
        source: "Scientific Reports 2025",
      },
      {
        title: "长期AI使用导致认知疲劳",
        content: "对500名成年人的调查显示，长期AI使用与心理疲惫、注意力紧张和信息过载高度相关（r=0.905），与决策自信心呈负相关（r=-0.360）。",
        highlight: "r=0.905",
        source: "Annals of Neurosciences 2025",
      },
      {
        title: "AI依赖与心理健康的关系",
        content: "纵向研究发现，AI依赖从T1的17.14%上升到T2的24.19%。心理健康问题预测后续AI依赖，但反向关系不成立。逃避动机是关键中介因素。",
        highlight: "24.19%",
        source: "Psychology Research and Behavior Management 2024",
      },
    ],
  },
  {
    id: "disorders",
    icon: AlertTriangle,
    title: "新型AI相关心理问题",
    color: "destructive",
    findings: [
      {
        title: "生成式AI成瘾综合征（GAID）",
        content: "研究者提出GAID作为新型行为障碍，区别于被动的数字成瘾。其特征包括：难以限制AI互动、戒断症状（焦虑、烦躁、不安）、认知灵活性受损、创造性独立性削弱。",
        highlight: "新型障碍",
        source: "Asian Journal of Psychiatry 2025",
      },
      {
        title: "AI焦虑普遍存在",
        content: "研究显示人群中存在中等偏高的AI焦虑水平（均值=4.62），尽管对AI的态度总体积极（均值=5.01）。建议在AI设计中优先考虑用户赋权、透明度和认知促进。",
        highlight: "均值=4.62",
        source: "Annals of Neurosciences 2025",
      },
    ],
  },
  {
    id: "ethics",
    icon: Shield,
    title: "伦理挑战与未来展望",
    color: "secondary",
    findings: [
      {
        title: "五大核心伦理关切",
        content: "研究识别出AI医疗应用的五大伦理挑战：公正与公平（算法偏见）、透明度（模型黑箱）、患者知情同意与保密、问责制（责任归属）、以患者为中心的护理。",
        highlight: "五大挑战",
        source: "PLOS Digital Health 2025",
      },
      {
        title: "算法偏见的现实案例",
        content: "研究引用了一个典型案例：某医疗算法将相同风险分数分配给黑人和白人患者，尽管黑人患者实际病情更严重——因为算法使用医疗成本而非实际需求作为代理指标。",
        highlight: "偏见案例",
        source: "PLOS Digital Health 2025",
      },
      {
        title: "负责任AI部署的路线图",
        content: "Science期刊发表的综述提出了负责任AI部署的路线图，强调AI可能在负责任部署时减少医疗不平等，但需要在预处理、治疗中和治疗后各阶段进行审慎设计。",
        highlight: "路线图",
        source: "Science 2026",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Findings() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/research-data.png"
            alt="Research Data"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-4 border-primary/50">
              <BookOpen className="w-3 h-3 mr-1" />
              基于17篇高质量论文
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">研究发现</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              系统梳理近一年来AI心理学领域的核心研究成果，涵盖学科建设、临床应用、
              LLM特征、认知影响、新型障碍和伦理挑战六大主题。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-16 md:top-20 z-40 py-4 glass-card border-y border-border/30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors whitespace-nowrap text-sm"
              >
                <section.icon className={`w-4 h-4 text-${section.color}`} />
                <span>{section.title.split("AI")[0] || section.title.slice(0, 8)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className="py-16 relative"
        >
          {sectionIndex % 2 === 1 && (
            <div className="absolute inset-0 bg-gradient-neural opacity-50" />
          )}
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className={`w-12 h-12 rounded-xl bg-${section.color}/10 flex items-center justify-center`}>
                <section.icon className={`w-6 h-6 text-${section.color}`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {section.findings.map((finding, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass-card border-border/30 hover-lift">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{finding.title}</CardTitle>
                        {finding.highlight && (
                          <Badge 
                            variant="secondary" 
                            className={`shrink-0 bg-${section.color}/10 text-${section.color} border-${section.color}/30`}
                          >
                            {finding.highlight}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {finding.content}
                      </p>
                      {'source' in finding && finding.source && (
                        <p className="text-xs text-muted-foreground/70 mt-3 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          来源: {finding.source as string}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {sectionIndex < sections.length - 1 && (
            <div className="container mt-16">
              <div className="section-divider" />
            </div>
          )}
        </section>
      ))}

      {/* Summary Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">研究启示</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    综合以上研究发现，AI心理学正处于快速发展阶段。AI在心理健康领域展现出巨大潜力，
                    但同时也带来了新的挑战和风险。
                  </p>
                  <p>
                    <strong className="text-foreground">关键建议：</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>建立多学科协作框架，确保AI应用的安全与伦理</li>
                    <li>发展以人为本的AI设计理念，强调用户赋权与透明度</li>
                    <li>加强纵向与真实世界研究，追踪AI的长期心理影响</li>
                    <li>在心理学教育中系统整合AI相关知识与技能</li>
                    <li>采用人机协作的混合模式，发挥各自优势</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
