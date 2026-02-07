/**
 * About Page - Neural Network Aesthetic
 * 
 * Design Philosophy:
 * - Clear presentation of research methodology
 * - Visual timeline of research scope
 * - Contact and attribution information
 */

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Target, 
  Users, 
  Calendar,
  Database,
  CheckCircle,
  Lightbulb,
  Heart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const methodology = [
  {
    step: 1,
    title: "文献检索",
    description: "通过PubMed、Google Scholar、Nature、Science等学术数据库，使用\"AI Psychology\"、\"Artificial Intelligence Mental Health\"、\"LLM Psychology\"等关键词进行系统检索。",
    icon: Database,
  },
  {
    step: 2,
    title: "筛选标准",
    description: "纳入2024年1月至2026年1月期间发表的同行评审论文，排除会议摘要、预印本和非英文文献。",
    icon: Target,
  },
  {
    step: 3,
    title: "信息提取",
    description: "对每篇论文提取标题、发表日期、机构、期刊、研究方法、主要结果和贡献等关键信息。",
    icon: BookOpen,
  },
  {
    step: 4,
    title: "主题分析",
    description: "采用主题分析法，将论文归类为六大核心主题：学科建设、临床应用、LLM特征、认知影响、新型障碍和伦理挑战。",
    icon: Lightbulb,
  },
];

const sources = [
  { name: "Nature", count: 4, color: "primary" },
  { name: "Science", count: 1, color: "secondary" },
  { name: "JMIR", count: 2, color: "accent" },
  { name: "PubMed Central", count: 6, color: "primary" },
  { name: "其他顶级期刊", count: 4, color: "secondary" },
];

const highlights = [
  { label: "收录论文", value: "17篇" },
  { label: "研究时间跨度", value: "2024-2026" },
  { label: "核心主题", value: "6个" },
  { label: "数据来源", value: "10+期刊" },
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

export default function About() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ethics-balance.png"
            alt="Ethics Balance"
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
              <Heart className="w-3 h-3 mr-1" />
              关于本研究
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">关于</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              本网站汇集了近一年来AI心理学领域的最新研究成果，
              旨在帮助研究者、从业者和公众了解这一新兴交叉学科的发展动态。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/30 text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Purpose */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  研究目的
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  随着人工智能技术的快速发展，AI与心理学的交叉研究日益受到关注。
                  <strong className="text-foreground">AI Psychology（AI心理学）</strong>
                  作为一个新兴学科，正在探索AI如何影响人类的认知、情感和行为，
                  以及如何将AI技术应用于心理健康领域。
                </p>
                <p>
                  本研究旨在：
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>系统梳理AI心理学领域的最新研究进展</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>识别关键研究主题和重要发现</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>为研究者和从业者提供便捷的文献资源</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>促进公众对AI心理影响的认识和讨论</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-neural opacity-50" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">研究方法</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              本研究采用系统文献综述方法，遵循以下步骤收集和分析相关论文
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {methodology.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/30 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{item.step}</span>
                      </div>
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">数据来源</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              本研究收录的论文来自以下权威学术出版机构
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {sources.map((source, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card border-border/30">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${source.color}`} />
                    <span className="font-medium">{source.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {source.count}篇
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  研究局限
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  本研究存在以下局限性，读者在参考时应予以注意：
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>时间范围限于2024-2026年，可能遗漏早期重要研究</li>
                  <li>仅纳入英文文献，可能存在语言偏倚</li>
                  <li>以叙述性综述为主，未进行系统性元分析</li>
                  <li>AI心理学作为新兴领域，研究证据仍在积累中</li>
                  <li>部分研究为横断面设计，因果关系需谨慎解读</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Attribution */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="glass-card border-primary/30">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">研究信息</h3>
                <p className="text-muted-foreground mb-4">
                  本研究由 <span className="text-gradient font-semibold">Manus AI</span> 于2026年1月完成
                </p>
                <p className="text-sm text-muted-foreground">
                  所有论文信息均来自公开学术资源，仅供学术研究和教育目的使用。
                  如有任何问题或建议，欢迎通过相关渠道联系。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
